import type { ViteConfig } from '@nuxt/schema'

const vite: ViteConfig = {
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/variables.scss" as *;',
      },
    },
  },
}

export default vite
