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
};

type Actions = {
  increaseWPM: () => void;
  nextIndex: () => void;
  startCountDown: () => void;
  setInputValue: (value: string) => void;
  setIsCurrentWordIncorrect: (value: boolean) => void;
  setIncorrectWordsIndex: (value: number) => void;
  reset: () => void;
};

export const useStore = create<typeof initialState & Actions>((set) => ({
  ...initialState,
  startCountDown: () => {
    set((state) => ({ timeLeft: state.timeLeft - 1 }));
  },
  setInputValue: (value) => {
    set((state) => ({ inputValue: state.timeLeft ? value.trim() : value }));
  },
  increaseWPM: () => {
    set((state) => ({
      WPM: state.WPM + 1,
    }));
  },
  nextIndex: () => {
    set((state) => {
      if (state.activeIndex < state.words.length) {
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
  reset: () => set({ ...initialState, words: shuffle(WORDS) }),
}));
