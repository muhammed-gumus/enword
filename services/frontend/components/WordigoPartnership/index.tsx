"use client";

import Link from "next/link";
import Image from "next/image";

// import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const WordCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-center px-4 gap-4 md:gap-16">
      <div className="flex flex-col gap-4 justify-start text-left items-center w-full md:w-1/2  md:px-0">
        <div className="w-full flex flex-row gap-4 justfiy-center md:justify-start mt-8 md:mt-0 items-center text-2xl md:text-2xl font-bold">
          Wordigo{" "}
          <Image
            src={"/images/partnership.png"}
            width={32}
            height={32}
            alt=""
          />{" "}
          EnWord
        </div>
        <p className="text-md text-center md:text-left opacity-70">
          EnWord supports your language learning with words in English, Turkish
          and in a sentence. To make the words you learn in EnWord more
          permanent, you can use the Wordigo extension. With Wordigo, you can
          save words from EnWord in your personalized library and make your
          language learning process more effective.
        </p>
        <div className="flex flex-row justify-center md:justify-start items-center w-full gap-4 ">
          {" "}
          <Link
            target="_blank"
            href={
              "https://chromewebstore.google.com/detail/wordigo-translator-dictio/mckifajhmdgpffjciaanamiheadnclpi?hl=tr"
            }
          >
            <button
              type="button"
              className="flex inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
              Try the extension
            </button>
          </Link>
          <Link href={"https://www.wordigo.app/tr"} target="_blank">
            <button
              type="button"
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 px-4">
        <Image
          src={"/images/wordigo-usage.png"}
          width={1000}
          height={0}
          alt=""
        />
      </div>
    </div>
  );
};

export default WordCard;
