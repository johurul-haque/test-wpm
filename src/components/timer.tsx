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
    <time className="border rounded px-3.5 flex items-center bg-gray-200">
      {countDown}
    </time>
  );
}
