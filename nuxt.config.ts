import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  ssr: false, // disables server-side rendering
  nitro: {
    preset: 'static' // generates a fully static site
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   vite: {
    plugins: [
      tsconfigPaths()
    ]
  },
  app: {
    head: {
      titleTemplate: '%s - Kristi Rell',   // lets you append page titles
      title: 'Portfolio',                // default title
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  css: [
    '~/assets/css/main.css',
  ],
})