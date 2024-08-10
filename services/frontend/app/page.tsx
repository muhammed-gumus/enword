import Navbar from "@/components/Navbar";
import WordCard from "@/components/WordCard";
import Image from "next/image";
import Banner from "@/components/Banner"

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center py-6 px-8 md:px-24 bg-white">
      <Banner/>
    </main>
  );
}
