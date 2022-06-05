import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  typescript: {
    strict: true,
  },
  css: [
    'maz-ui/css/main.css',
    '@/assets/index.css',
  ],
  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/ace-builds@1.5.3/src-noconflict/ace.js', type: 'text/javascript' },
    ],
  },
  pageTransition: {
    name: 'page',
  },
  build: {
    transpile: ['maz-ui'],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  target: 'static',
  ssr: false,
})
