import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  site: 'https://elixorteam.github.io',
  base: 'Elixor',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
