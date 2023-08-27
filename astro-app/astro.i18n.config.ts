import { defineAstroI18nConfig } from 'astro-i18n'

const localesPath = 'src/locales'

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['ru'],
  showDefaultLangCode: false,
  trailingSlash: 'never',
  translations: {
    en: `${localesPath}/en.json`,
    ru: `${localesPath}/ru.json`,
  },
})
