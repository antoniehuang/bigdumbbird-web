import type { Metadata, Viewport } from "next";
import { LXGW_WenKai_TC, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const displayFont = LXGW_WenKai_TC({
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

const bodyFont = Noto_Sans_TC({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "大笨鳥華語 | Big Dumb Bird Mandarin",
  description:
    "跟著大笨鳥，從台灣的日常開始學華語。Learn Mandarin through the everyday language and character of Taiwan.",
  openGraph: {
    title: "大笨鳥華語 | Big Dumb Bird Mandarin",
    description: "Learn Mandarin through the everyday language and character of Taiwan.",
    type: "website",
    locale: "zh_TW",
  },
};

export const viewport: Viewport = {
  themeColor: "#182b28",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
