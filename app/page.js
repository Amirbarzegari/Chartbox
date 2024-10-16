"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [symbol, setSymbol] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-lg gap-4 p-10 w-full h-full justify-center">
      <h1 className="text-xl font-bold">Crypto</h1>
      <label className="flex flex-col gap-2">
        <span className="text-gray-500 mb-1">Enter Symbol Name and Search</span>
        <input
          type="text"
          placeholder="Symbol Name"
          className="rounded-md border border-gray-300 py-3 px-5"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              router.push(`/coin/${symbol}`);
            }
          }}
        />
      </label>
      <Button text="Search" link={`/coin/${symbol}`} />
    </div>
  );
}
