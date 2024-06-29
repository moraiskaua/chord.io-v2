import { useInstrumentStore } from '@/stores/instrumentStore';

export const useHeaderController = () => {
  const instrument = useInstrumentStore(state => state.instrument);
  const setInstrument = useInstrumentStore(state => state.setInstrument);

  const toggleInstrument = () => {
    if (instrument === 'piano') {
      setInstrument('guitar-acoustic');
      localStorage.setItem('instrument', 'guitar-acoustic');
    } else {
      setInstrument('piano');
      localStorage.setItem('instrument', 'piano');
    }
  };

  return { instrument, toggleInstrument };
};
