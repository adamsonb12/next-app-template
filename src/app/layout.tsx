import localFont from "next/font/local";
import { ClientProviders } from "./providers";

const swyfFont = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Bold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-BoldItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-LightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/Montserrat-MediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is applicable to all the routes in the app. In addition, the root layout must define the <html> and the <body> tags because Next.js does not automatically add them.
  return (
    <html lang="en" className={swyfFont.className}>
      <head />
      <body
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#FFF",
          margin: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ClientProviders>
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
