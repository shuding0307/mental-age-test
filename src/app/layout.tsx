import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

export const metadata: Metadata = {
  title: "정신연령 테스트",
  icons: {
    icon: "/favicon.png",
  }
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
      />
      <GoogleAnalytics gaId="G-PVWQMP97BS" />
    </html>
  );
}
