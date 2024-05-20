import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import instance from '@/helpers/axios'

export const useAppStore = defineStore('scientists', () => {
  const scientists = ref([])
  async function getScientists() {
    try {
      const response = await instance.get('scientist_list/')
    } catch (e) {}
  }
  return {}
})
