import { defineStore } from 'pinia'
import axios from 'axios'

export const useFoodStore = defineStore('food', {
  state: () => ({
    foods: []
  }),
  actions: {
    async fetchFoods() {
      try {
        const res = await axios.get('http://localhost:3000/foods')
        this.foods = res.data
      } catch (err) {
        console.error('Gagal mengambil data makanan:', err)
      }
    },
    async tambahMakanan(food) {
      try {
        const res = await axios.post('http://localhost:3000/foods', food)
        this.foods.push(res.data) // ✅ Tambahkan langsung agar reaktif
      } catch (err) {
        console.error('Gagal menambahkan makanan:', err)
      }
    },
    async hapusMakanan(id) {
      try {
        await axios.delete(`http://localhost:3000/foods/${id}`)
        this.foods = this.foods.filter(f => f.id !== id) // ✅ Hapus langsung agar reaktif
      } catch (err) {
        console.error('Gagal menghapus makanan:', err)
      }
    }
  }
})
