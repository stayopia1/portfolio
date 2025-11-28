import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import sr from './sr.json';
import es from './es.json';
import az from './az.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
      en: { translation: en },
      sr: { translation: sr },
      es: { translation: es },
      az: { translation: az },
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    fallbackLng: 'en',
});

export default i18n;
