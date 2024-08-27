import { useStore } from "@/store";
import { useEffect } from "react";
import { cn } from "@/lib/utils.ts";

export function Timer() {
  const { timeLeft, countDown, time, setTime } = useStore();

  useEffect(() => {
    if (timeLeft && timeLeft < time) {
      const intervalId = setInterval(() => {
        countDown();
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeLeft, countDown, time]);

  return (
    <select
      key={time + timeLeft}
      aria-disabled={timeLeft < time}
      onChange={(e) => {
        setTime(+e.currentTarget.value);
      }}
      className={cn(
        "rounded px-3.5 flex items-center bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800" +
          " dark:text-neutral-50 appearance-none",
        {
          "select-none pointer-events-none": timeLeft < time,
        },
      )}
    >
      <option value={time}>{timeLeft}</option>

      {[60, 30, 15]
        .filter((value) => value !== time)
        .map((value) => (
          <option value={value}>{value}</option>
        ))}
    </select>
  );
}
