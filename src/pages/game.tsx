import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useOnUpdate } from "@/hook/draw";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [boxAX, setBoxAX] = useState(100);
  const [boxBX, setBoxBX] = useState(200);

  const onCollision = (A: number, B: number) => {
    return A === B;
  };

  useOnUpdate(() => {
    if (onCollision(boxAX, boxBX)) {
      console.log("collision");
    } else {
      setBoxBX((x) => x - 1);
      setBoxAX((x) => x + 1);
    }
  });

  return (
    <main>
      <div
        style={{
          transform: `translateX(${boxAX}px)`,
        }}
        className="absolute w-[20px] h-[20px] bg-red-400"
      ></div>

      <div
        style={{
          transform: `translateX(${boxBX}px)`,
        }}
        className="absolute w-[20px] h-[20px] bg-blue-400"
      ></div>
    </main>
  );
}
