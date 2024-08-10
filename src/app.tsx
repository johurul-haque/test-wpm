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
    <main key={store.resetKey} className="container py-12 font-mono">
      {!!store.timeLeft && <WordBox />}

      <div className="flex gap-2 justify-center max-w-md mx-auto">
        <Timer />

        <Input
          type="text"
          className="w-full focus-visible:ring-0 text-lg"
          autoFocus
          value={store.inputValue}
          onKeyDown={(e) => {
            if (e.key === ' ' && store.timeLeft) {
              const { value } = e.currentTarget;

              if (value) {
                store.nextIndex();
              }

              const isCorrectWord = store.words[store.activeIndex] === value;

              if (isCorrectWord) {
                store.increaseWPM();
              } else {
                store.setIncorrectWordsIndex(store.activeIndex);
              }

              store.setInputValue('');
            }
          }}
          onChange={(e) => {
            if (store.timeLeft === 60) {
              store.countDown();
            }

            const { value } = e.target;

            const isCorrectWord = store.words[store.activeIndex].startsWith(
              value.trim()
            );

            store.setIsCurrentWordIncorrect(!isCorrectWord);
            store.setInputValue(value);
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

      {!store.timeLeft && <ResultCard />}
    </main>
  );
}
