import { useLanguageStore } from '@/stores/languageStore';

export const useHomeController = () => {
  const languageValue = useLanguageStore(state => state.language);

  return { languageValue };
};
