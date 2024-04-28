import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "정신연령 테스트",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
      <GoogleAnalytics gaId="G-PVWQMP97BS" />
    </html>
  );
}
