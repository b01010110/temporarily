const cPattern = 'composables/**/*.{ts,js,mjs,mts}'
const pattern = '**/' + cPattern

const entities = 'entities/' + pattern
const shared = 'shared/' + cPattern

export default [entities, shared]
