import { GithubIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="container flex justify-between items-center py-4 sm:py-6">
      <Logo />

      <a
        href="https://github.com/johurul-haque/test-wpm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">View source code</span>
        <GithubIcon strokeWidth={1.7} />
      </a>
    </header>
  );
}

function Logo() {
  return (
    <div title="Test WPM logo" className="font-mono select-none">
      <span className="flex justify-between text-xs font-extralight">
        <span className="sr-only">TEST</span>

        {'test'.split('').map((letter, i) => (
          <span aria-hidden key={letter + i}>
            {letter}
          </span>
        ))}
      </span>

      <div className="text-lg font-bold leading-none tracking-widest -mt-1">
        wpm
      </div>
    </div>
  );
}
