import { SetStateActionType } from '@/types/set-state-action';
import { useEffect } from 'react';

type PropsType = {
  startTimer: boolean;
  setCountDown: SetStateActionType<number>;
  countDown: number;
};

export function Timer({ startTimer, setCountDown, countDown }: PropsType) {
  useEffect(() => {
    if (startTimer && countDown) {
      const intervalId = setInterval(() => {
        setCountDown((t) => t - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [countDown, startTimer, setCountDown]);

  return (
    <time className="rounded px-3.5 flex items-center bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
      {countDown}
    </time>
  );
}
