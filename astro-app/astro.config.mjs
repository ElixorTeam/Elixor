import i18n from "astro-i18n"
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solid from '@astrojs/solid-js'
import node from '@astrojs/node'

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solid(),
    i18n(),
  ],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    assets: true
  }
})
