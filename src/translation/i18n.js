import i18n from 'i18next';
import translationEN from './en.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
