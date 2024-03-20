export const useContactInfoStore = defineStore('contactInfo', () => {
  const phone = ref('+7 (383) 200-00-00')
  const worktime = ref('Звоните нам с 8:00 до 22:00')

  return { phone, worktime }
})
