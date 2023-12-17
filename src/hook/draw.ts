import { useEffect, useState } from "react";

type Props = (frames: number) => void;

export const useOnUpdate = (fn: Props) => {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrames((frames) => {
        fn(frames);
        return frames + 1;
      });
    }, 1000 / 24);

    return () => clearInterval(interval);
  });
};
