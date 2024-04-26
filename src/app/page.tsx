"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/test">시작하기</Link>
    </div>
  );
}
