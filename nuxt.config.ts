import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   vite: {
    plugins: [
      tsconfigPaths()
    ]
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