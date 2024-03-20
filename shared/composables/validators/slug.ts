import { helpers } from '@vuelidate/validators'

export const useSlugValidator = () => {
  let slug = helpers.withParams({ type: 'slug' }, helpers.regex(/^[a-z0-9-]+$/))

  slug = helpers.withMessage('Invalid slug value', slug)

  return slug
}
