import { RotateCcwIcon } from 'lucide-react';
import { useState } from 'react';
import { Timer } from './components/timer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [result, setResult] = useState<Array<string>>([]);

  const [inputValue, setInputValue] = useState('');

  return (
    <main className="container py-12">
      <div className="flex gap-2 justify-center max-w-md mx-auto">
        <Timer startTimer={startTimer} />

        <Input
          value={inputValue.trim()}
          onKeyDown={(e) => {
            if (e.key === ' ') {
              const { value } = e.currentTarget;

              setResult((prev) => [...prev, value]);
              setInputValue('');
            }
          }}
          onChange={(e) => {
            if (!startTimer) {
              setStartTimer(true);
            }

            setInputValue(e.target.value);
          }}
          type="text"
          className="w-full focus-visible:ring-0"
        />

        <Button size={'icon'} className="px-3">
          <span className="sr-only">Restart test</span>
          <RotateCcwIcon size={16} strokeWidth={1.7} />
        </Button>
      </div>
    </main>
  );
}
