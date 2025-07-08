import { defineStore } from 'pinia'
import axios from 'axios'

export const useDrinkStore = defineStore('drinkStore', {
  state: () => ({
    drinks: []
  }),
  actions: {
    async fetchDrinks() {
      try {
        const res = await axios.get('http://localhost:3000/drinks')
        this.drinks = res.data
      } catch (err) {
        console.error('Gagal memuat data minuman', err)
      }
    }
  }
})
