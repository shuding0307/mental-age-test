"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link className="hover:text-rose-400 text-3xl" href="/test">정신연령 테스트 하러가기</Link>
    </div>
  );
}
