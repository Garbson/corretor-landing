import { createI18n } from 'vue-i18n'
import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'

const messages = {
  pt,
  en,
  es
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

export default i18n