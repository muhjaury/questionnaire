import WidgetProvider from "@/context";
import Providers from "@/redux/Provider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./../assets/css/globals.css";
import "@ant-design/v5-patch-for-react-19";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skrining Kesehatan Jiwa",
  description:
    "Aplikasi Skrining Kesehatan Jiwa RS.dr.Hasri Ainun Habibie Parepare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <Providers>
          <WidgetProvider>{children}</WidgetProvider>
        </Providers>
      </body>
    </html>
  );
}
