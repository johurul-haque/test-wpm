import { RotateCcwIcon } from 'lucide-react';
import { ResultCard } from './components/result-card';
import { Timer } from './components/timer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { WordBox } from './components/words-box';
import { useStore } from './store';

export function App() {
  const store = useStore();

  return (
    <main className="container py-12 font-mono">
      {!!store.countDown && <WordBox activeIndex={store.result.length} />}

      <div className="flex gap-2 justify-center max-w-md mx-auto">
        <Timer />

        <Input
          type="text"
          className="w-full focus-visible:ring-0 text-lg"
          autoFocus
          value={store.inputValue}
          onKeyDown={(e) => {
            if (e.key === ' ' && store.countDown) {
              const { value } = e.currentTarget;

              if (value) {
                store.addResult(value);
              }

              store.setInputValue('');
            }
          }}
          onChange={(e) => {
            if (store.countDown === 60) {
              store.startCountDown();
            }

            store.setInputValue(e.target.value);
          }}
        />

        <Button
          title="Restart test"
          onClick={store.reset}
          size={'icon'}
          className="px-3"
        >
          <span className="sr-only">Restart test</span>
          <RotateCcwIcon size={16} strokeWidth={1.9} />
        </Button>
      </div>

      {!store.countDown && <ResultCard wordsCompleted={store.result.length} />}
    </main>
  );
}
