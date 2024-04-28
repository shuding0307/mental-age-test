"use client";

import Link from 'next/link';
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link className="hover:text-rose-400 text-xl" href="/test">정신연령 테스트 하러가기</Link>
    </div>
  );
}
