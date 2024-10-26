import React, { createContext, useContext, useState,useEffect } from 'react';
import languageContextType from '../types/langContextType';
import langsTypes from '../types/langsTypes';
import lang from '../functions/lang';
const defaultValue:languageContextType={
    language:"pt-br",
    setLanguage: () => {},
}

const LanguageContext = createContext<languageContextType>(defaultValue);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<langsTypes>('pt-br');

  useEffect(() => {
    lang(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};