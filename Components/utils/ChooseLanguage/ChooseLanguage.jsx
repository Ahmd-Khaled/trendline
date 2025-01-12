"use client";
import { useLocale, useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useEffect, useState, useTransition } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const ChooseLanguage = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();


  // -----------------------------------------------------------------------
  // useEffect(() => {
  //   // Detect the browser's preferred language
  //   if (typeof navigator !== 'undefined'){

  //   }
  //   const browserLang = navigator.language || navigator.userLanguage;
  //   const supportedLocales = ['ar', 'en'];
  //   let detectedLocale = 'ar'; // fallback to 'en-US' if the browser's language is not supported

  //   if (supportedLocales.includes(browserLang)) {
  //     detectedLocale = browserLang;
  //     Cookies.set("lang", detectedLocale);
  //     Cookies.set("NEXT_LOCALE", detectedLocale);
  //   }
  // }, []);
  // -----------------------------------------------------------------------

  const [isLanguageOpened, setIsLanguageOpened] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale === "en" ? "العربية" : "English"
  );
  const [secondLanguage, setSecondLanguage] = useState(
    locale === "en" ? "English" : "العربية"
  );

  useEffect(() => {
    setSelectedLanguage(locale === "en" ? "English" : "العربية");
    setSecondLanguage(locale !== "en" ? "English" : "العربية");
  }, [locale]);

  const showChooseLangHandler = () => {
    setIsLanguageOpened((prev) => !prev);
  };

  const selectLanguageHandler = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageOpened(false);
    if (lang === "العربية") {
      Cookies.set("lang", "ar");
      localStorage.setItem("lang", "ar");
      setSecondLanguage("English");
      router.refresh();
    }
    if (lang === "English") {
      Cookies.set("lang", "en");
      localStorage.setItem("lang", "en");
      setSecondLanguage("العربية");
      router.refresh();
    }
  };


  return (
    <div className={styles.chooseLanguage}>
      <div onClick={showChooseLangHandler} className={styles.selectedLanguage}>
        <span className={styles.text}>{selectedLanguage}</span>
        {isLanguageOpened ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isLanguageOpened ? (
        <ul className={styles.langList}>
          <li
            onClick={() => selectLanguageHandler(secondLanguage)}
            className={styles.langItem}
          >
            {secondLanguage}
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default ChooseLanguage;
