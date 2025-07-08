<template>
  <div class="checkout">
    <h2>Checkout Berhasil</h2>
    <p>Terima kasih atas pesanan Anda!</p>
    <p>Total: <strong>Rp {{ formatPrice(total) }}</strong></p>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  setup() {
    const cart = useCartStore()
    const formatPrice = (n) => n.toLocaleString('id-ID')
    return { total: cart.totalPrice, formatPrice }
  }
}
</script>

<style scoped>
.checkout {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f8f5f2 0%, #e8ecef 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.checkout-content {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.checkout-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, #2e7d32 0%, #8d6e63 100%);
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2e7d32;
  font-family: 'Playfair Display', serif;
  position: relative;
  padding-bottom: 15px;
}

h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #8d6e63;
}

.success-icon {
  font-size: 4rem;
  color: #2e7d32;
  margin-bottom: 20px;
  animation: bounce 1s ease;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
}

.total-amount {
  font-size: 1.5rem;
  color: #2e7d32;
  font-weight: bold;
  margin: 20px 0;
  padding: 10px;
  background: #f8f5f2;
  border-radius: 8px;
  display: inline-block;
}

.order-details {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px dashed #ddd;
}

.order-number {
  background: #f5f5f5;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 15px;
}

.continue-btn {
  margin-top: 30px;
  background: #2e7d32;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
}

.continue-btn:hover {
  background: #1b5e20;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(46, 125, 50, 0.3);
}

@media (max-width: 600px) {
  .checkout-content {
    padding: 30px 20px;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .success-icon {
    font-size: 3rem;
  }
}
</style>