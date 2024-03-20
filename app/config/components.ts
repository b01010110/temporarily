import type { ComponentsOptions } from '@nuxt/schema'

const pathPrefix = false
const uiPattern = 'ui/**/*.vue'
const pattern = '**/' + uiPattern

const components: ComponentsOptions['dirs'] = [
  {
    path: '@/widgets',
    prefix: 'Widget',
    pathPrefix,
    pattern,
  },
  {
    path: '@/features',
    prefix: 'Feature',
    pathPrefix,
    pattern,
  },
  {
    path: '@/entities',
    prefix: 'Entity',
    pathPrefix,
    pattern,
  },
  {
    path: '@/shared',
    prefix: 'UI',
    pathPrefix,
    pattern: uiPattern,
  },
]

export default components
