import { Noto_Kufi_Arabic, Poppins } from "next/font/google";
import "./globals.scss";
// import Header from "@/Components/Home/Header/Header";
// import Footer from "@/Components/Home/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const expoFont = localFont({
  src: [
    {
      path: "../fonts/ExpoArabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-ExpoArabic-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ExpoArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-ExpoArabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-ExpoArabic-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-expo",
});

export const metadata = {
  title: "User Registration and Auth Flow",
  description: "Register Form",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body
        // className={`${expoFont.variable} ${poppins.variable} ${notoKufiArabic.variable} antialiased`}
        className={`${
          locale === "en" ? poppins.className : expoFont.className
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <main suppressHydrationWarning={true}>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
