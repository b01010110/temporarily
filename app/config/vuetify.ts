import type { ModuleOptions } from 'vuetify-nuxt-module'
import { ru } from 'vuetify/locale'

const vuetify: ModuleOptions = {
  vuetifyOptions: {
    defaults: {
      global: {
        ripple: false,
      },
    },
    locale: {
      locale: 'ru',
      messages: { ru },
    },
  },
}

export default vuetify
