import components from './app/config/components'
import composables from './app/config/composables'
import vite from './app/config/vite'
import vuetify from './app/config/vuetify'
import pinia from './app/config/pinia'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full' }],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: ['vuetify-nuxt-module', '@pinia/nuxt', '@pinia-orm/nuxt', 'nuxt-icons', 'maz-ui/nuxt'],
  components,
  imports: {
    dirs: [...composables],
    presets: [
      {
        from: '@vuelidate/core',
        imports: ['useVuelidate'],
      },
    ],
  },
  vite,
  vuetify,
  pinia,
})
