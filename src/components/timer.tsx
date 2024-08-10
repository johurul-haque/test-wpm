import { useStore } from '@/store';
import { useEffect } from 'react';

export function Timer() {
  const { timeLeft, countDown } = useStore();

  useEffect(() => {
    if (timeLeft && timeLeft < 60) {
      const intervalId = setInterval(() => {
        countDown();
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeLeft, countDown]);

  return (
    <time className="rounded px-3.5 flex items-center bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
      {timeLeft}
    </time>
  );
}
