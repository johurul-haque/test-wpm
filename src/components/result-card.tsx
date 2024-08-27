import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useStore } from "@/store";

export function ResultCard() {
  const { activeIndex, correctWordsTyped, incorrectWordsIndex, time } =
    useStore();

  const WPM = (correctWordsTyped / time) * 60;
  const accuracy = (correctWordsTyped / activeIndex) * 100 || 0;

  return (
    <Card className="max-w-xs mx-auto my-8">
      <CardHeader className="text-center">
        <CardTitle>{WPM} wpm</CardTitle>
        <CardDescription>your typing speed {WPM > 70 && "🔥"}</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-neutral-500 dark:text-neutral-400">accuracy</dt>
            <dd>{accuracy.toFixed(2)} %</dd>
          </div>

          <div className="flex justify-between">
            <dt className="text-neutral-500 dark:text-neutral-400">
              incorrect words
            </dt>
            <dd>{incorrectWordsIndex.length}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
