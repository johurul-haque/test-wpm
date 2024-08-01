import { useEffect, useState } from 'react';

export function Timer({ startTimer }: { startTimer: boolean }) {
  const [countDown, setCountDown] = useState(60);

  useEffect(() => {
    if (startTimer && countDown) {
      const intervalId = setInterval(() => {
        setCountDown((t) => t - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [countDown, startTimer]);
  return (
    <time className="border rounded px-3.5 flex items-center bg-gray-200">
      {countDown}
    </time>
  );
}
