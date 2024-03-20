import type { ModuleOptions } from '@pinia/nuxt'

const pinia: ModuleOptions = {
  autoImports: ['defineStore', 'storeToRefs'],
}

export default pinia
