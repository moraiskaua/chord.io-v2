import { create } from 'zustand';

type State = {
  language: string;
};

type Action = {
  updateLanguage: (language: State['language']) => void;
};

export const useLanguageStore = create<State & Action>(set => ({
  language: 'en',
  updateLanguage: language => set(() => ({ language: language })),
}));
