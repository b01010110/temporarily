import plural from 'plural-ru'
import RealtyCard from '@/entities/realty/models/RealtyCard'

export const useRealtyFilterStore = defineStore('realtyFilter', () => {
  const isOpened = ref(false)

  function open() {
    isOpened.value = true
  }

  function close() {
    isOpened.value = false
  }

  // TODO эмуляция данных сервера
  for (let i = 1; i < 12; i++) {
    useRepo(RealtyCard).save({
      id: i,
      region: 'Ленинский',
      slug: 'akvamarin',
      name: 'Кв Аквамарин',
      address: 'Ул. Междуреченская, 7/1, 5/3, 5/2, 5/4, 5/7',
      deadline: 'Сдан',
      image: '/akvamarin.jpg',
      imageMap: '/akvamarin.jpg',
      housingClass: 'комфорт',
      metro: [
        {
          slug: 'sibirskaya',
          name: 'Сибирская',
          onfoot: 11,
          color: '#23a12c',
        },
      ],
      apartmentInfo: [
        { name: 'Студия', area: 27.5, price: 3.3 },
        { name: '2 комн.', area: 63.6, price: 7.6 },
        { name: '3 комн.', area: 73.3, price: 8.7 },
        { name: '4 комн.', area: 92.5, price: 9.4 },
        { name: '5+ комн.' },
      ],
      coords: [55.004 + i / 1000, 82.93 + i / 1000],
      price: 900000,
    })
  }

  const realtyCards = computed(() => useRepo(RealtyCard).all())

  const count = computed(() => {
    const length = realtyCards.value.length
    const pluralWord = plural(length, 'результат', 'результата', 'результатов')
    return `${length} ${pluralWord}`
  })

  const mapMarkers = computed(() => {
    return realtyCards.value.map((item) => ({
      id: item.id,
      coords: item.coords,
      title: item.name,
      link: `/${item.slug}`,
      image: item.imageMap,
      address: item.address,
      price: item.price,
    }))
  })

  return { isOpened, open, close, realtyCards, count, mapMarkers }
})
