import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const routes = [
    { name: 'sciFiMain', text: 'Научно-популярные проеты' },
    { name: 'articles', text: 'Статьи' },
    { name: 'scientists', text: 'Студенческое научное сообщество' },
    { name: 'scientists', text: 'Учёные' },
    { name: 'home', text: 'Научные гранты' },
    { name: 'laboratories', text: 'Лаборатории' },
  ]

  return { routes }
})
