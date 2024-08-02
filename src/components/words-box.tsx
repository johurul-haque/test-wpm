import { WORDS } from '@/assets/data';
import { cn } from '@/lib/utils';

export function WordBox({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="border dark:border-neutral-800 rounded-md max-w-3xl w-full mx-auto mb-8 overflow-clip">
      <div className="flex gap-y-0.5 flex-wrap max-h-48 overflow-y-auto p-6 md:p-8">
        {WORDS.map((word, i) => (
          <div
            key={word + i}
            className={cn('px-2.5 py-0.5 rounded', {
              'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50':
                activeIndex === i,
            })}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
