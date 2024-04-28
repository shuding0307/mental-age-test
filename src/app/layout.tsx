import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
