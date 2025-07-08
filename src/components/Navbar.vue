<template>
  <nav class="navbar">
    <div class="logo-container">
      <div class="logo">Modern Minimalis Kuliner</div>
      <div class="tagline">restoran modern dengan sentuhan budaya.</div>
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Makanan</router-link>
      <router-link to="/drinks">Minuman</router-link>
      <router-link to="/cart" class="cart-link">
        <span class="cart-icon">🛒</span>
        <span class="cart-text">Keranjang</span>
      </router-link>
      <router-link to="/orders">Riwayat</router-link>
      <router-link to="/about">Tentang Kami</router-link>
      <router-link to="/login" class="admin-link">Admin</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%);
  padding: 12px 5%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 2px solid #6d4c41;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  flex-direction: column;
}

.logo {
  color: #4e342e;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.5px;
  font-family: 'Playfair Display', serif;
}

.tagline {
  color: #6d4c41;
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
  letter-spacing: 0.3px;
}

.nav-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-links a {
  color: #5d4037;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  background-color: rgba(93, 64, 55, 0.1);
  color: #4e342e;
}

.nav-links a:hover::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 12px;
  right: 12px;
  height: 2px;
  background-color: #6d4c41;
}

.router-link-exact-active {
  color: #4e342e;
  font-weight: 600;
}

.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 12px;
  right: 12px;
  height: 2px;
  background-color: #4e342e;
}

.cart-link {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cart-icon {
  font-size: 16px;
}

.cart-text {
  font-size: 15px;
}

.admin-link {
  background-color: #6d4c41;
  color: white !important;
  padding: 8px 16px !important;
  border-radius: 20px !important;
}

.admin-link:hover {
  background-color: #4e342e !important;
}

@media (max-width: 1024px) {
  .navbar {
    flex-direction: column;
    padding: 15px;
  }

  .logo-container {
    margin-bottom: 15px;
    text-align: center;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
}
</style>
