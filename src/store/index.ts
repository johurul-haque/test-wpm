import { WORDS } from "@/assets/data";
import { shuffle } from "@/lib/shuffle";
import { create } from "zustand";

const initialState = {
  time: 60,
  timeLeft: 60,
  correctWordsTyped: 0,
  activeIndex: 0,
  inputValue: "",
  words: shuffle(WORDS),
  isCurrentWordIncorrect: false,
  incorrectWordsIndex: [] as number[],
  resetKey: 0,
};

export const useStore = create<typeof initialState & Actions>((set) => ({
  ...initialState,
  setTime: (value) => set({ time: value, timeLeft: value }),
  countDown: () => {
    set((state) => ({ timeLeft: --state.timeLeft }));
  },
  setInputValue: (value) => {
    set((state) => ({ inputValue: state.timeLeft ? value.trim() : value }));
  },
  increaseWordsTyped: () => {
    set((state) => ({
      correctWordsTyped: ++state.correctWordsTyped,
    }));
  },
  nextIndex: () => {
    set((state) => {
      if (state.activeIndex < state.words.length) {
        //? Don't use ++ operator here. Causes' weirdness.
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
      time: state.time,
      timeLeft: state.time,
      words: shuffle(WORDS),
      resetKey: ++state.resetKey,
    })),
}));

type Actions = {
  setTime: (value: number) => void;
  increaseWordsTyped: () => void;
  nextIndex: () => void;
  countDown: () => void;
  setInputValue: (value: string) => void;
  setIsCurrentWordIncorrect: (value: boolean) => void;
  setIncorrectWordsIndex: (value: number) => void;
  reset: () => void;
};
