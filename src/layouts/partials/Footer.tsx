"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import social from "@/config/social.json";
import { slugSelector } from "@/lib/utils/slugSelector";
import { markdownify } from "@/lib/utils/textConverter";
import { INavigationLink } from "@/types";
import Link from "next/link";

const Footer = ({
  lang,
  menu,
}: {
  lang: string;
  menu: { footer: INavigationLink[] };
}) => {
  const { copyright } = config.params;

    const isRtl = lang === 'ar';

  return (
      <footer className={`bg-theme-light dark:bg-darkmode-theme-light ${isRtl && "rtl"}`}>
      <div className="container">
        <div className="row items-center py-10">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo lang={lang} />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <ul>
                {menu.footer.map((menu, i) => (
                  <li className={`m-3 inline-block ${isRtl && i === 0 && "mr-0"}`} key={menu.name}>
                  <Link href={slugSelector(lang, menu.url)}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
            <div className={`mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 ${isRtl ? "lg:text-left" : "lg:text-right"}`}>
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
