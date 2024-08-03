import { useStore } from '@/store';
import { useEffect } from 'react';

export function Timer() {
  const { timeLeft, startCountDown } = useStore();

  useEffect(() => {
    if (timeLeft && timeLeft < 60) {
      const intervalId = setInterval(() => {
        startCountDown();
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeLeft, startCountDown]);

  return (
    <time className="rounded px-3.5 flex items-center bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
      {timeLeft}
    </time>
  );
}
