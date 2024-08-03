import { WORDS } from '@/assets/data';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

export function WordBox({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="border dark:border-neutral-800 rounded-md max-w-3xl w-full mx-auto mb-8 overflow-clip">
      <div className="flex gap-y-0.5 overflow-y-auto flex-wrap max-h-48 p-6 md:p-8">
        {WORDS.map((word, i) => (
          <Word
            key={word + i}
            word={word}
            activeIndex={activeIndex}
            wordIndex={i}
          />
        ))}
      </div>
    </div>
  );
}

type WordProps = {
  activeIndex: number;
  wordIndex: number;
  word: string;
};

function Word({ activeIndex, wordIndex, word }: WordProps) {
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
      })}
    >
      {word}
    </div>
  );
}
