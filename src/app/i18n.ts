/* istanbul ignore file -- @preserve */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * @description Initialize i18n
 */
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {}
    }
  }
})
