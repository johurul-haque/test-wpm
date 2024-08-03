import { create } from 'zustand';

const initialState = {
  countDown: 60,
  inputValue: '',
  result: [] as string[],
};

type Actions = {
  startCountDown: () => void;
  setInputValue: (value: string) => void;
  addResult: (value: string) => void;
  reset: () => void;
};

export const useStore = create<typeof initialState & Actions>((set) => ({
  ...initialState,
  startCountDown: () => set((state) => ({ countDown: state.countDown - 1 })),
  setInputValue: (value) => {
    set((state) => ({ inputValue: state.countDown ? value.trim() : value }));
  },
  addResult: (value) => {
    set((state) => ({
      result: [...state.result, value],
    }));
  },
  reset: () => set(initialState),
}));
