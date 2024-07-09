document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const elements = document.querySelectorAll('[data-key]');

    function loadLanguage(lang) {
        fetch(`lang/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                elements.forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (data[key]) {
                        element.textContent = data[key];
                    }
                });
            });
    }

    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang === 'en' ? 'he' : 'en';
        document.documentElement.lang = currentLang;
        loadLanguage(currentLang);
    });

    // Initial load
    loadLanguage('en');
});
