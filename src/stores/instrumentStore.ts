import { create } from 'zustand';

type State = {
  instrument: string;
};

type Action = {
  setInstrument: (instrument: State['instrument']) => void;
};

export const useInstrumentStore = create<State & Action>(set => ({
  instrument: 'piano',
  setInstrument: instrument => set(() => ({ instrument: instrument })),
}));
