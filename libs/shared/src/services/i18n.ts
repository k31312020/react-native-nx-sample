import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from '../i18n/en/en.json';
import translationDE from '../i18n/de/de.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  }, 
  de: {
    translation: translationDE 
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;