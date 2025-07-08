import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + item.price, 0)
  },
  actions: {
    addToCart(item) {
      this.items.push(item)
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
