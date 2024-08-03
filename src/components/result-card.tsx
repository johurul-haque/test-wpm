import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ResultCard({ wordsCompleted }: { wordsCompleted: number }) {
  return (
    <Card className="max-w-xs mx-auto my-8">
      <CardHeader className="text-center">
        <CardTitle>{wordsCompleted} wpm</CardTitle>
        <CardDescription>
          your typing speed {wordsCompleted > 70 && '🔥'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-neutral-500 dark:text-neutral-400">accuracy</dt>
            <dd>96%</dd>
          </div>

          <div className="flex justify-between">
            <dt className="text-neutral-500 dark:text-neutral-400">
              wrong words
            </dt>
            <dd>12</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
