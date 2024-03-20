import type { MenuItem } from '@/shared/interfaces/Menu'

export const useMenuStore = defineStore('menu', () => {
  const menuItems = ref<MenuItem[]>([
    {
      id: 0,
      text: 'Главная',
      link: '/',
    },
    {
      id: 1,
      text: 'Подобрать квартиру',
      link: '/',
    },
    {
      id: 2,
      text: 'Ипотека',
      link: '/',
    },
    {
      id: 3,
      text: 'Инвестиции',
      link: '/',
    },
  ])

  return { menuItems }
})
