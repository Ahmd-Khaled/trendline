import Cookies from "js-cookie";
import { NextIntlClientProvider } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const headerList = headers();

  const acceptLanguage = headerList.get("accept-language");
  const acceptLang = acceptLanguage.split(",")[0];

  // let locale = acceptLang.includes("ar") ? "ar" : "en";
  let locale = "en";

  const newLocale = cookies().get("lang")?.value;
  // console.log("********************************** newLocale: ", newLocale);

  if (newLocale !== undefined) {
    locale = newLocale;
  }

  // console.log("--------------------------- == newLocale: ", newLocale)
  // console.log("--------------------------- == acceptLanguage: ", acceptLanguage)
  // console.log("--------------------------- == acceptLanguage-split: ", acceptLang)

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
