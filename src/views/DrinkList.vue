<template>
  <div class="drinks-page">
    <div class="page-header">
      <h2 class="page-title">Daftar Minuman</h2>
      <p class="page-subtitle">Segarkan hari Anda dengan minuman khas Nusantara</p>
    </div>

    <div class="menu-list">
      <div v-for="drink in drinks" :key="drink.id" class="drink-item">
        <div class="drink-image-wrapper">
          <img
            :src="drink.image"
            :alt="drink.name"
            @load="loaded[drink.id] = true"
            v-show="loaded[drink.id]"
            class="drink-image"
          />
          <div v-if="!loaded[drink.id]" class="shimmer"></div>
          <div class="drink-badge" v-if="drink.isSpecial">Spesial</div>
        </div>
        
        <div class="drink-content">
          <div class="drink-header">
            <h3 class="drink-name">{{ drink.name }}</h3>
            <p class="drink-price">Rp {{ formatPrice(drink.price) }}</p>
          </div>
          
          <div class="drink-meta">
            <div class="rating-display">
              <div class="stars">
                <span v-for="i in 5" :key="i" :class="{ filled: i <= Math.round(averageRating(drink.reviews)) }">★</span>
              </div>
              <span class="rating-value">{{ averageRating(drink.reviews) }}</span>
              <span class="review-count" v-if="drink.reviews?.length">({{ drink.reviews.length }})</span>
              <span class="no-reviews" v-else>Belum ada ulasan</span>
            </div>
            
            <p class="drink-description" v-if="drink.description">{{ drink.description }}</p>
          </div>
          
          <div class="action-buttons">
            <button @click="addToCart(drink)" class="add-to-cart">
              <span class="btn-icon"></span> + Keranjang
            </button>
            <button class="order-now" @click="pesanLangsung(drink)">
              <span class="btn-icon">⚡</span> Pesan Langsung
            </button>
          </div>
        </div>
        
        <div class="review-section">
          <h4 class="review-title">Berikan Ulasan</h4>
          <div class="star-input">
            <span 
              v-for="star in 5" 
              :key="star"
              @click="newReviews[drink.id].rating = star"
              :class="{ active: star <= newReviews[drink.id].rating }"
            >★</span>
          </div>
          <textarea
            v-model="newReviews[drink.id].comment"
            placeholder="Bagaimana minuman ini?"
            class="review-textarea"
          ></textarea>
          <button @click="submitReview(drink)" class="submit-review">
            Kirim Ulasan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDrinkStore } from '@/stores/drinkStore'
import { useCartStore } from '@/stores/cartStore'
import axios from 'axios'
import { onMounted, computed, reactive } from 'vue'

export default {
  setup() {
    const drinkStore = useDrinkStore()
    const cart = useCartStore()
    const loaded = reactive({})
    const newReviews = reactive({})

    onMounted(() => {
      drinkStore.fetchDrinks()
    })

    const drinks = computed(() => {
      return drinkStore.drinks.map(drink => {
        if (!newReviews[drink.id]) {
          newReviews[drink.id] = { rating: 0, comment: '' }
        }
        return drink
      })
    })

    const addToCart = (item) => {
      cart.addToCart(item)
      // Consider using a toast notification instead of alert
    }

    const pesanLangsung = (item) => {
      if (confirm(`Pesan "${item.name}" sekarang?`)) {
        // Show success notification
      }
    }

    const submitReview = async (drink) => {
      const { rating, comment } = newReviews[drink.id]
      if (rating < 1 || rating > 5 || !comment) {
        alert('Rating (1-5) dan komentar wajib diisi.')
        return
      }
      const review = {
        rating,
        comment,
        timestamp: new Date().toISOString()
      }
      await axios.post(`http://localhost:3000/drinks/${drink.id}/reviews`, review)
      // Show success notification
      newReviews[drink.id].rating = 0
      newReviews[drink.id].comment = ''
      drinkStore.fetchDrinks()
    }

    const averageRating = (reviews = []) => {
      if (!reviews?.length) return 0
      const total = reviews.reduce((sum, r) => sum + r.rating, 0)
      return parseFloat((total / reviews.length).toFixed(1))
    }

    const formatPrice = (n) => n.toLocaleString('id-ID')

    return {
      drinks,
      addToCart,
      pesanLangsung,
      formatPrice,
      submitReview,
      newReviews,
      loaded,
      averageRating
    }
  }
}
</script>

<style scoped>
.drinks-page {
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

.drink-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.drink-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.drink-image-wrapper {
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
}

.drink-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.drink-item:hover .drink-image {
  transform: scale(1.05);
}

.shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
}

.drink-badge {
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

.drink-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.drink-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.drink-name {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
}

.drink-price {
  font-size: 1.2rem;
  color: #2e7d32;
  font-weight: bold;
  margin: 0;
}

.drink-meta {
  margin-top: 10px;
  flex-grow: 1;
}

.rating-display {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.stars {
  display: flex;
  color: #ddd;
}

.stars span {
  font-size: 1.1rem;
}

.stars span.filled {
  color: #f39c12;
}

.rating-value {
  font-weight: bold;
  color: #f39c12;
}

.review-count {
  font-size: 0.8rem;
  color: #95a5a6;
}

.no-reviews {
  font-size: 0.9rem;
  color: #95a5a6;
}

.drink-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
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

.review-section {
  padding: 20px;
  background: #f5f5f5;
  border-top: 1px solid #eee;
}

.review-title {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.star-input {
  margin-bottom: 10px;
}

.star-input span {
  font-size: 1.5rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
  margin-right: 5px;
}

.star-input span.active {
  color: #f39c12;
}

.review-textarea {
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
}
</style>