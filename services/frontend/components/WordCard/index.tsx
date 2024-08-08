"use client";

import React, { useState } from "react";

export default function WordCard() {
  return (
    <div className="flex flex-col gap-8 w-1/2 items-center justify-center mt-24 bg-white text-black p-4">
      <h1 className="text-3xl font-extrabold">MemoryWord</h1>
      <div className="flex w-full flex-row items-center justify-around">
        <p>İngilizce kelime</p>
        <p>TÜrkçe kelime</p>
      </div>
    </div>
  );
}
