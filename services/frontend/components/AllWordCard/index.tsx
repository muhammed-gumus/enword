"use client";
import { useEffect, useState } from "react";
import { Word } from "@/app/types/wordTypes";
import LoadingComponent from "@/components/LoadingComponent";

const WordCard: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/wordsAll`
        );
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

  // Helper function to highlight the word in the sentence
  const highlightWord = (sentence: string, word: string) => {
    const regex = new RegExp(`(${word})`, "gi");
    return sentence.replace(regex, '<span class="font-bold">$1</span>');
  };

  if (loading) {
    return <LoadingComponent />;
  }

  // if (error) {
  //   return <ErrorComponent />;
  // }

  return (
    <div className="flex flex-col items-center justify-center mt-24 p-4 min-h-screen">
      <div className="flex flex-wrap gap-8 justify-center w-full max-w-4xl">
        {words.map((word) => (
          <div
            key={word.enWord}
            className="bg-state-300 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm w-full"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                  English
                </h3>
                <p className="text-lg md:text-xl text-gray-800 mt-1">
                  {word.enWord}
                </p>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-green-600">
                  Turkish
                </h3>
                <p className="text-lg md:text-xl text-gray-800 mt-1">
                  {word.trWord}
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-purple-600">
                  Example Sentence
                </h3>
                <p
                  className="text-lg md:text-xl text-gray-800 mt-1"
                  dangerouslySetInnerHTML={{
                    __html: highlightWord(word.sentence, word.enWord),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordCard;
