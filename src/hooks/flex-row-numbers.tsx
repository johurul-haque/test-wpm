import { useEffect, useRef, useState } from 'react';

type RowNumbers = {
  [key: number]: number;
};

export function useFlexRowNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rowNumbers, setRowNumbers] = useState<RowNumbers>({});

  const calculateRowNumbers = () => {
    if (!containerRef.current) return;

    const items = containerRef.current.children;

    let currentTop: number | null = null;
    let rowNumber = 0;

    const newRowNumbers: RowNumbers = {};

    Array.from(items).forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop !== currentTop) {
        currentTop = itemTop;
        rowNumber++;
      }

      newRowNumbers[index] = rowNumber;
    });

    setRowNumbers(newRowNumbers);
  };

  useEffect(() => {
    calculateRowNumbers();

    window.addEventListener('resize', calculateRowNumbers);

    return () => {
      window.removeEventListener('resize', calculateRowNumbers);
    };
  }, []);

  return { containerRef, rowNumbers };
}
