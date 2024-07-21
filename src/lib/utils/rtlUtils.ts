import languages from "@/config/language.json";

export const isRtlLanguage = (lang: string): boolean => {
  const language = languages.find((l) => l.languageCode === lang);
  return language?.rtl ?? false;
};

export const getDirectionClass = (lang: string): string => {
  return isRtlLanguage(lang) ? "rtl" : "ltr";
};
