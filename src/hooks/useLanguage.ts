import { useState } from 'react';

type Language = 'en' | 'fr';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return { language, toggleLanguage };
}