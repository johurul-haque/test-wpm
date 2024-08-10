import { WORDS } from '@/assets/data';
import { shuffle } from '@/lib/shuffle';
import { create } from 'zustand';

const initialState = {
  WPM: 0,
  timeLeft: 60,
  activeIndex: 0,
  inputValue: '',
  words: shuffle(WORDS),
  isCurrentWordIncorrect: false,
  incorrectWordsIndex: [] as number[],
  resetKey: 0,
};

type Actions = {
  increaseWPM: () => void;
  nextIndex: () => void;
  countDown: () => void;
  setInputValue: (value: string) => void;
  setIsCurrentWordIncorrect: (value: boolean) => void;
  setIncorrectWordsIndex: (value: number) => void;
  reset: () => void;
};

export const useStore = create<typeof initialState & Actions>((set) => ({
  ...initialState,
  countDown: () => {
    set((state) => ({ timeLeft: --state.timeLeft }));
  },
  setInputValue: (value) => {
    set((state) => ({ inputValue: state.timeLeft ? value.trim() : value }));
  },
  increaseWPM: () => {
    set((state) => ({
      WPM: ++state.WPM,
    }));
  },
  nextIndex: () => {
    set((state) => {
      if (state.activeIndex < state.words.length) {
        //? Don't use ++ operator here. Causes weirdness.
        return { activeIndex: state.activeIndex + 1 };
      }

      return state;
    });
  },
  setIsCurrentWordIncorrect: (value) => {
    set({ isCurrentWordIncorrect: value });
  },
  setIncorrectWordsIndex: (value) => {
    set((state) => ({
      incorrectWordsIndex: [...state.incorrectWordsIndex, value],
    }));
  },
  reset: () =>
    set((state) => ({
      ...initialState,
      words: shuffle(WORDS),
      resetKey: ++state.resetKey,
    })),
}));
