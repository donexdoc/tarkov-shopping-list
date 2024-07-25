import i18next from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs'
import I18NextHttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { LANGUAGES } from './constatnts'

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LANGUAGES.EN,
    debug: import.meta.env.MODE === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
  })

export default i18next
