import { cn } from '@/lib/utils';
import { useStore } from '@/store';
import { useEffect, useRef } from 'react';

export function WordBox() {
  const { words } = useStore();

  return (
    <div className="border dark:border-neutral-800 rounded-md max-w-3xl w-full mx-auto mb-8 overflow-clip">
      <div className="flex gap-y-0.5 overflow-y-auto flex-wrap max-h-[8.4rem] p-6 text-lg">
        {words.map((word, i) => (
          <Word key={word + i} word={word} wordIndex={i} />
        ))}
      </div>
    </div>
  );
}

type WordProps = {
  wordIndex: number;
  word: string;
};

function Word({ wordIndex, word }: WordProps) {
  const { isCurrentWordIncorrect, incorrectWordsIndex, activeIndex } =
    useStore();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeIndex === wordIndex) {
      ref.current?.scrollTo();
    }
  }, [activeIndex, wordIndex]);

  return (
    <div
      ref={ref}
      className={cn('px-2.5 py-0.5 rounded', {
        'bg-neutral-200/80 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50':
          activeIndex === wordIndex,
        ' bg-red-500 text-white dark:bg-red-900':
          isCurrentWordIncorrect && activeIndex === wordIndex,
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
