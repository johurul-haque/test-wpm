import { useFlexRowNumbers } from '@/hooks/flex-row-numbers';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';

export function WordBox() {
  const { words, activeIndex } = useStore();
  const { containerRef, rowNumbers } = useFlexRowNumbers();

  return (
    <div className="border dark:border-neutral-800 rounded-md max-w-3xl w-full mx-auto mb-8 overflow-clip">
      <div
        ref={containerRef}
        className="flex gap-y-0.5 flex-wrap max-h-[8.4rem] p-6 text-lg"
      >
        {words.map((word, i) => (
          <Word
            key={word + i}
            word={word}
            activeIndex={activeIndex}
            wordIndex={i}
            hidden={rowNumbers[i] < rowNumbers[activeIndex] - 1}
          />
        ))}
      </div>
    </div>
  );
}

type WordProps = {
  wordIndex: number;
  word: string;
  activeIndex: number;
  hidden: boolean;
};

function Word({ wordIndex, word, activeIndex, hidden }: WordProps) {
  const { isCurrentWordIncorrect, incorrectWordsIndex } = useStore();

  return (
    <div
      className={cn('px-2.5 py-0.5 rounded', {
        hidden,
        'bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50':
          activeIndex === wordIndex,
        ' bg-red-500 text-white dark:bg-red-900':
          activeIndex === wordIndex && isCurrentWordIncorrect,
        'text-red-600 dark:text-red-800':
          incorrectWordsIndex.includes(wordIndex),
        'text-green-600 dark:text-green-800':
          wordIndex < activeIndex && !incorrectWordsIndex.includes(wordIndex),
      })}
    >
      {word}
    </div>
  );
}
