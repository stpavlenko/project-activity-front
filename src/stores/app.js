import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const routes = [
    { name: 'sciFiMain', text: 'Научпоп' },
    { name: 'articles', text: 'Статьи' },
    { name: 'scientists', text: 'Учёные' },
    { name: 'scientists', text: 'СНО' },
    { name: 'laboratories', text: 'Лаборатории' },
    { name: 'home', text: 'Научные гранты' }
  ]

  return { routes }
})
