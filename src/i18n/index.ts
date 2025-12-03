import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import sr from './sr.json';
import es from './es.json';
import az from './az.json';

import ar from './ar.json';
import ch from './ch.json';
import de from './de.json';
import fa from './fa.json';
import kk from './kk.json';
import ru from './ru.json';
import tr from './tr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sr: { translation: sr },
      es: { translation: es },
      az: { translation: az },
      ar: { translation: ar },
      ch: { translation: ch },
      de: { translation: de },
      fa: { translation: fa },
      kk: { translation: kk },
      ru: { translation: ru },
      tr: { translation: tr },
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    fallbackLng: 'en',
  });

export default i18n;
