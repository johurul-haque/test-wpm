import { RotateCcwIcon } from 'lucide-react';
import { useState } from 'react';
import { ResultCard } from './components/result-card';
import { Timer } from './components/timer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { WordBox } from './components/words-box';

export function App() {
  const [countDown, setCountDown] = useState(60);
  const [startTimer, setStartTimer] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [result, addResult] = useState<Array<string>>([]);

  return (
    <main className="container py-12 font-mono">
      {!!countDown && <WordBox activeIndex={result.length} />}

      <div className="flex gap-2 justify-center max-w-md mx-auto">
        <Timer
          setCountDown={setCountDown}
          countDown={countDown}
          startTimer={startTimer}
        />

        <Input
          type="text"
          className="w-full focus-visible:ring-0 text-lg"
          autoFocus
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === ' ' && countDown) {
              const { value } = e.currentTarget;

              if (value) {
                addResult((prev) => [...prev, value]);
              }

              setInputValue('');
            }
          }}
          onChange={(e) => {
            if (!startTimer) {
              setStartTimer(true);
            }

            const { value } = e.target;

            setInputValue(countDown ? value.trim() : value);
          }}
        />

        <Button
          title="Restart test"
          onClick={() => {
            setStartTimer(false);
            setCountDown(60);
            setInputValue('');
            addResult([]);
          }}
          size={'icon'}
          className="px-3"
        >
          <span className="sr-only">Restart test</span>
          <RotateCcwIcon size={16} strokeWidth={1.9} />
        </Button>
      </div>

      {!countDown && <ResultCard wordsCompleted={result.length} />}
    </main>
  );
}
