"use client";
import { useEffect, useState } from "react";
import { Word } from "@/app/types/wordTypes";
import ErrorComponent from "@/components/ErrorComponent";
import LoadingComponent from "@/components/LoadingComponent";

const WordCard: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("http://localhost:3001/words");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Word[] = await response.json();
        setWords(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-12 p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">MemoryWord</h1>
      <div className="flex flex-wrap gap-8 justify-center w-full max-w-4xl">
        {words.map((word) => (
          <div
            key={word.enWord}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm w-full"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">English</h3>
                <p className="text-xl text-gray-800 mt-1">{word.enWord}</p>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-semibold text-green-600">Turkish</h3>
                <p className="text-xl text-gray-800 mt-1">{word.trWord}</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-purple-600">Example Sentence</h3>
                <p className="text-xl text-gray-800 mt-1">{word.sentence}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordCard;
