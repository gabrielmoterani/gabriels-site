import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import detector from "i18next-browser-languagedetector";


import translationEN from './locales/en/en.json';
import translationPTBR from './locales/ptBr/pt-BR.json';
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ptBr:{
      translation:  translationPTBR
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "ptBr", // use en if detected lng is not available


    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

export default i18n;