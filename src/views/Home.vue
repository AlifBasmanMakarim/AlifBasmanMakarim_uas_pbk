<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Selamat Datang di Modern Minimalis Kuliner</h1>
        <p class="subtitle">Restoran modern dengan sentuhan budaya</p>
        <p class="description">Temukan menu terbaik kami dan nikmati pengalaman kuliner yang simpel dan elegan</p>

        <div class="home-buttons">
          <router-link to="/menu" class="btn btn-primary">
            <span class="btn-icon">🍽️</span>
            <span>Menu Makanan</span>
          </router-link>
          <router-link to="/drinks" class="btn btn-accent">
            <span class="btn-icon">🥂</span>
            <span>Menu Minuman</span>
          </router-link>
          <router-link to="/cart" class="btn btn-secondary">
            <span class="btn-icon">🛒</span>
            <span>Keranjang</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="feature-card">
        <div class="feature-icon">🪴</div>
        <h3>Desain Modern</h3>
        <p>Interior dan sajian berkonsep minimalis yang memanjakan mata</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🍴</div>
        <h3>Hidangan Elegan</h3>
        <p>Perpaduan rasa klasik dan presentasi modern</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Pelayanan Cepat</h3>
        <p>Pesanan disiapkan dengan efisiensi dan kualitas terjaga</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background-color: #fdfcfa;
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
              url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  padding: 120px 20px;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 15px;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.description {
  font-size: 1.1rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.home-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.btn {
  padding: 14px 28px;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: #6d4c41;
}

.btn-primary:hover {
  background-color: #4e342e;
}

.btn-accent {
  background-color: #8d6e63;
}

.btn-accent:hover {
  background-color: #5d4037;
}

.btn-secondary {
  background-color: #616161;
}

.btn-secondary:hover {
  background-color: #424242;
}

.btn-icon {
  font-size: 1.2rem;
}

.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #4e342e;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.feature-card p {
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .home-buttons {
    flex-direction: column;
    align-items: center;
  }

  .features-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>
