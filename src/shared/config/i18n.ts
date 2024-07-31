import i18next from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs'
import I18NextHttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { LANGUAGE_EN } from '../constants'

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LANGUAGE_EN.code,
    debug: import.meta.env.NODE_ENV === 'development',
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
