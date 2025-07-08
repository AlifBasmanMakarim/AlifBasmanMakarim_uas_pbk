<template>
  <div class="cart-page">
    <div class="page-header">
      <h2 class="page-title">Keranjang Belanja</h2>
      <p class="page-subtitle">Review pesanan Anda sebelum checkout</p>
    </div>

    <div class="cart-container">
      <div class="cart-items" v-if="items.length">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <div class="item-image">
            <img
              :src="item.image"
              :alt="item.name"
              @load="loaded[item.id] = true"
              v-show="loaded[item.id]"
              class="product-image"
            />
            <div v-if="!loaded[item.id]" class="shimmer"></div>
          </div>
          
          <div class="item-details">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-price">Rp {{ formatPrice(item.price) }}</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
              <span class="quantity">{{ item.quantity || 1 }}</span>
              <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
            </div>
          </div>
          
          <button @click="confirmHapus(item.id)" class="remove-btn">
            <span class="icon">🗑️</span>
          </button>
        </div>
      </div>

      <div v-else class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Keranjang Kosong</h3>
        <p>Silakan tambahkan beberapa makanan lezat ke keranjang Anda</p>
        <router-link to="/menu" class="browse-btn">Lihat Menu</router-link>
      </div>

      <div v-if="items.length > 0" class="checkout-section">
        <div class="order-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>Rp {{ formatPrice(totalPrice) }}</span>
          </div>
          <div class="summary-row">
            <span>Biaya Layanan:</span>
            <span>Rp {{ formatPrice(serviceFee) }}</span>
          </div>
          <div class="summary-row total">
            <span>Total Pembayaran:</span>
            <span>Rp {{ formatPrice(totalPrice + serviceFee) }}</span>
          </div>
        </div>
        
        <button class="checkout-btn" @click="confirmOrder">
          <span class="btn-icon">📝</span> Pesan Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'
import { computed, reactive } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const cart = useCartStore()
    const items = computed(() => cart.items)
    const totalPrice = computed(() => cart.totalPrice)
    const loaded = reactive({})
    const serviceFee = 5000 // Example service fee

    const confirmHapus = (id) => {
      if (confirm('Apakah Anda yakin ingin menghapus item ini dari keranjang?')) {
        cart.removeFromCart(id)
      }
    }

    const increaseQuantity = (id) => {
      cart.increaseQuantity(id)
    }

    const decreaseQuantity = (id) => {
      if (cart.getItemQuantity(id) > 1) {
        cart.decreaseQuantity(id)
      } else {
        confirmHapus(id)
      }
    }

    const confirmOrder = async () => {
      if (confirm('Konfirmasi pemesanan semua item?')) {
        const payload = {
          items: [...cart.items],
          total: cart.totalPrice + serviceFee,
          timestamp: new Date().toLocaleString()
        }
        await axios.post('http://localhost:3000/orders', payload)
        cart.clearCart()
        // Consider using a toast notification instead of alert
      }
    }

    const formatPrice = (n) => n.toLocaleString('id-ID')

    return {
      items,
      totalPrice,
      serviceFee,
      confirmHapus,
      confirmOrder,
      formatPrice,
      loaded,
      increaseQuantity,
      decreaseQuantity
    }
  }
}
</script>

<style scoped>
.cart-page {
  padding: 30px 5%;
  background-color: #f8f5f2;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-title {
  font-size: 2.2rem;
  color: #2e7d32;
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #8d6e63;
}

.cart-container {
  max-width: 800px;
  margin: 0 auto;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.cart-item:hover {
  transform: translateY(-3px);
}

.item-image {
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
}

.item-details {
  flex-grow: 1;
  padding: 0 20px;
}

.item-name {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0 0 8px 0;
}

.item-price {
  font-size: 1.1rem;
  color: #2e7d32;
  font-weight: bold;
  margin: 0 0 12px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f0f0f0;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.quantity-btn:hover {
  background: #e0e0e0;
}

.quantity {
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #e74c3c;
  padding: 8px;
  transition: transform 0.2s;
}

.remove-btn:hover {
  transform: scale(1.1);
}

.empty-cart {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.empty-cart h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.empty-cart p {
  color: #7f8c8d;
  margin-bottom: 20px;
}

.browse-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #2e7d32;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: background 0.3s;
}

.browse-btn:hover {
  background: #1b5e20;
}

.checkout-section {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.order-summary {
  margin-bottom: 25px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.summary-row.total {
  font-weight: bold;
  font-size: 1.1rem;
  border-bottom: none;
  color: #2e7d32;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background: #8d6e63;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s;
}

.checkout-btn:hover {
  background: #6d4c41;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
  
  .item-details {
    padding: 15px 0;
    width: 100%;
  }
  
  .quantity-controls {
    justify-content: center;
  }
}
</style>