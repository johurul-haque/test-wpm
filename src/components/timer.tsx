import { useEffect, useState } from 'react';

export function Timer() {
  const [countDown, setCountDown] = useState(60);

  useEffect(() => {
    if (countDown) {
      const intervalId = setInterval(() => {
        setCountDown((t) => t - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [countDown]);
  return (
    <time className="border rounded px-3 py-1 bg-gray-200">{countDown}</time>
  );
}
