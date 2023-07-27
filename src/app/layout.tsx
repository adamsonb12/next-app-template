import localFont from "next/font/local";
import { ClientProviders } from "./providers";
import { Metadata } from "next";
import "./global.css";

const swyfFont = localFont({
  src: [
    // normal
    {
      path: "../assets/fonts/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
    // italic
    {
      path: "../assets/fonts/Montserrat-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Starter Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is applicable to all the routes in the app. In addition, the root layout must define the <html> and the <body> tags because Next.js does not automatically add them.
  return (
    <html lang="en" className={swyfFont.className}>
      <head />
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
