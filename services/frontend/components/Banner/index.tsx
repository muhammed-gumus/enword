"use client";

import Image from "next/image";
import Link from "next/link";

const WordCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full justify-start mt-24 px-4">
      <Link href="/DailyWords">
        <button className="flex flex-row items-center justify-center text-sm md:text-base gap-2 rounded-2xl border-2 border-dashed border-black bg-white px-3 py-1 md:px-6 md:py-2 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Let`s memorize it
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Learn English by memorizing
        </h1>
        <p className="text-md md:text-xl text-center opacity-70">
          Enhance your English vocabulary by learning and reinforcing 10 new
          random words each day, complete with translations and example
          sentences.
        </p>
      </div>
      <button className="cursor-default flex items-center px-3 py-1 md:px-6 md:py-2 mt-10 md:mt-16 border border-gray-300 rounded-full ">
        <span className="text-sm md:text-base text-gray-800 font-medium">
          Wordigo Collaboration
        </span>
        <Image
          src="/images/wordigo.png"
          alt="Arrow"
          width={24}
          height={24}
          className="ml-3"
        />
      </button>
    </div>
  );
};

export default WordCard;
