import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '../src/stores/cartStore'

describe('Cart Store', () => {
  setActivePinia(createPinia())

  it('menambah item ke keranjang', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, name: 'Mie Ayam', price: 12000 })
    expect(cart.items.length).toBe(1)
    expect(cart.items[0].name).toBe('Mie Ayam')
  })

  it('menghapus item dari keranjang', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 2, name: 'Soto', price: 10000 })
    cart.removeFromCart(2)
    expect(cart.items.length).toBe(0)
  })
})
