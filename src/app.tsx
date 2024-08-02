import { RotateCcwIcon } from 'lucide-react';
import { useState } from 'react';
import { Timer } from './components/timer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export function App() {
  const [countDown, setCountDown] = useState(59);
  const [startTimer, setStartTimer] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<Array<string>>([]);

  return (
    <main className="container py-12">
      <div className="flex gap-2 justify-center max-w-md mx-auto">
        <Timer
          setCountDown={setCountDown}
          countDown={countDown}
          startTimer={startTimer}
        />

        <Input
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === ' ' && countDown) {
              const { value } = e.currentTarget;

              setResult((prev) => [...prev, value]);
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
          type="text"
          className="w-full focus-visible:ring-0 text-lg"
        />

        <Button
          onClick={() => {
            setStartTimer(false);
            setCountDown(59);
            setInputValue('');
            setResult([]);
          }}
          size={'icon'}
          className="px-3"
        >
          <span className="sr-only">Restart test</span>
          <RotateCcwIcon size={16} strokeWidth={1.7} />
        </Button>
      </div>
    </main>
  );
}
