import { useLanguageStore } from '@/stores/languageStore';

export const useHomeController = () => {
  const language = useLanguageStore(state => state.language);

  return { language };
};
