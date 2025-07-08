<template>
  <div class="menu-page">
    <div class="page-header">
      <h2 class="page-title">Daftar Menu Makanan</h2>
      <p class="page-subtitle">Nikmati kelezatan kuliner Nusantara terbaik kami</p>
    </div>

    <div class="menu-list">
      <div v-for="item in foods" :key="item.id" class="menu-item">
        <div class="img-wrapper">
          <img
            :src="item.image"
            :alt="item.name"
            @load="loaded[item.id] = true"
            v-show="loaded[item.id]"
            class="food-image"
          />
          <div v-if="!loaded[item.id]" class="shimmer"></div>
          <div class="food-badge" v-if="item.isPopular">Populer</div>
        </div>
        
        <div class="menu-content">
          <div class="food-header">
            <h3 class="food-name">{{ item.name }}</h3>
            <p class="food-price">Rp {{ formatPrice(item.price) }}</p>
          </div>
          
          <div class="food-meta">
            <div class="rating" :class="{ 'no-rating': !item.rating }">
              <span v-if="item.rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-value">{{ item.rating.toFixed(1) }}</span>
              </span>
              <span v-else>Belum ada rating</span>
            </div>
            
            <div class="food-description" v-if="item.description">
              {{ item.description }}
            </div>
            
            <div class="review" v-if="item.review">
              <div class="quote-icon">"</div>
              <p>{{ item.review }}</p>
            </div>
          </div>
          
          <div class="action-buttons">
            <button @click="addToCart(item)" class="add-to-cart">
              <span class="btn-icon">+</span> Keranjang
            </button>
            <button class="order-now" @click="pesanLangsung(item)">
              <span class="btn-icon">⚡</span> Pesan Langsung
            </button>
          </div>
        </div>
        
        <div class="review-form">
          <h4 class="review-title">Berikan Ulasan</h4>
          <div class="star-rating">
            <span 
              v-for="star in 5" 
              :key="star"
              @click="ratings[item.id] = star"
              :class="{ active: star <= ratings[item.id] }"
            >★</span>
          </div>
          <textarea
            v-model="reviews[item.id]"
            placeholder="Bagaimana pengalaman Anda?"
            class="review-input"
          ></textarea>
          <button @click="submitReview(item)" class="submit-review">
            Kirim Ulasan
          </button>
        </div>
      </div>
    </div>

    <div class="floating-order" v-if="foods.length > 0">
      <button class="order-all-btn" @click="confirmOrder">
        <span class="btn-icon">📦</span> Pesan Semua ({{ cart.itemCount }})
      </button>
    </div>
  </div>
</template>

<script>
import { useFoodStore } from '@/stores/foodStore'
import { useCartStore } from '@/stores/cartStore'
import axios from 'axios'
import { onMounted, reactive, computed } from 'vue'

export default {
  setup() {
    const foodStore = useFoodStore()
    const cart = useCartStore()

    onMounted(() => {
      foodStore.fetchFoods()
    })

    const foods = computed(() => foodStore.foods)
    const loaded = reactive({})
    const ratings = reactive({})
    const reviews = reactive({})

    const addToCart = (item) => {
      cart.addToCart(item)
      // Show toast notification instead of alert
    }

    const pesanLangsung = async (item) => {
      if (confirm(`Pesan "${item.name}" sekarang?`)) {
        await axios.post('http://localhost:3000/orders', {
          items: [item],
          total: item.price,
          timestamp: new Date().toLocaleString()
        })
        // Show success notification
      }
    }

    const confirmOrder = async () => {
      if (confirm('Konfirmasi pemesanan semua makanan dari daftar ini?')) {
        const payload = {
          items: [...cart.items],
          total: cart.totalPrice,
          timestamp: new Date().toLocaleString()
        }
        await axios.post('http://localhost:3000/orders', payload)
        cart.clearCart()
        // Show success notification
      }
    }

    const submitReview = async (item) => {
      const rating = ratings[item.id]
      const review = reviews[item.id]
      if (!rating || !review) {
        alert('Isi rating dan ulasan terlebih dahulu.')
        return
      }
      await axios.put(`http://localhost:3000/foods/${item.id}`, {
        ...item,
        rating,
        review
      })
      foodStore.fetchFoods()
      // Show success notification
      ratings[item.id] = null
      reviews[item.id] = ''
    }

    const formatPrice = (n) => n.toLocaleString('id-ID')

    return {
      foods,
      loaded,
      addToCart,
      confirmOrder,
      formatPrice,
      pesanLangsung,
      ratings,
      reviews,
      submitReview,
      cart
    }
  }
}
</script>

<style scoped>
.menu-page {
  padding: 30px 5%;
  background: #f8f5f2;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
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
  max-width: 600px;
  margin: 0 auto;
}

.menu-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.menu-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.img-wrapper {
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
}

.food-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.menu-item:hover .food-image {
  transform: scale(1.05);
}

.shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
}

.food-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.menu-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.food-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.food-name {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
}

.food-price {
  font-size: 1.2rem;
  color: #2e7d32;
  font-weight: bold;
  margin: 0;
}

.food-meta {
  margin-top: 10px;
  flex-grow: 1;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #f39c12;
  font-weight: 500;
  margin-bottom: 10px;
}

.rating.no-rating {
  color: #95a5a6;
}

.stars {
  letter-spacing: 2px;
  font-size: 0.9rem;
}

.rating-value {
  font-size: 0.9rem;
}

.food-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.review {
  background: #f9f9f9;
  border-left: 3px solid #8d6e63;
  padding: 10px;
  margin: 10px 0;
  position: relative;
}

.review p {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}

.quote-icon {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 2rem;
  color: rgba(141, 110, 99, 0.1);
  line-height: 1;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

button {
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.add-to-cart {
  background: #2e7d32;
  color: white;
  flex-grow: 1;
}

.add-to-cart:hover {
  background: #1b5e20;
}

.order-now {
  background: #8d6e63;
  color: white;
}

.order-now:hover {
  background: #6d4c41;
}

.review-form {
  padding: 20px;
  background: #f5f5f5;
  border-top: 1px solid #eee;
}

.review-title {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.star-rating {
  margin-bottom: 10px;
}

.star-rating span {
  font-size: 1.5rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
  margin-right: 5px;
}

.star-rating span.active {
  color: #f39c12;
}

.review-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-height: 80px;
  margin-bottom: 10px;
  resize: vertical;
}

.submit-review {
  background: #3498db;
  color: white;
  width: 100%;
  justify-content: center;
}

.submit-review:hover {
  background: #2980b9;
}

.floating-order {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.order-all-btn {
  background: #e74c3c;
  color: white;
  padding: 15px 25px;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}

.order-all-btn:hover {
  background: #c0392b;
  transform: translateY(-3px);
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@media (max-width: 768px) {
  .menu-list {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .floating-order {
    right: 15px;
    bottom: 15px;
  }
  
  .order-all-btn {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
}
</style>