import { helpers } from '@vuelidate/validators'

export const useUniqueValidator = () => {
  const runtimeConfig = useRuntimeConfig()

  async function request(url: string, value: any) {
    const { available } = await $fetch<{ available: boolean }>(url, {
      baseURL: runtimeConfig.public.baseUrl,
      query: { slug: value },
    })
    return available
  }

  const unique = (url: string) => {
    let uniqueValidator = helpers.withParams(
      { type: 'unique' },
      async (value: any): Promise<boolean> => {
        if (helpers.req(value)) {
          try {
            return await request(url, value)
          } catch {
            return false
          }
        }

        return true
      }
    )

    uniqueValidator = helpers.withMessage("Slug value isn't available", uniqueValidator)

    return helpers.withAsync(uniqueValidator)
  }

  return unique
}
