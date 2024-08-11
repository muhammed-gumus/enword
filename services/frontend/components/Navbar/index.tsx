"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-2 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <Image
            src={"/images/logo-light.png"}
            width={60}
            height={60}
            alt={"logo"}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-row gap-4 items-center text-xs md:text-base md:gap-8 font-medium">
          <Link
            href="/AllWords"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            All Words
          </Link>
          <Link
            href="/DailyWords"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Daily Words
          </Link>
          <Link
            href="https://www.wordigo.app/tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Wordigo
          </Link>
        </div>
      </div>
    </nav>
  );
}
