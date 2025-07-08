<template>
  <div class="about-page">
    <div class="hero-section">
      <div class="hero-overlay">
        <h1>Tentang Modern Minimalis Kuliner</h1>
        <p>Menikmati Kesederhanaan & Elegansi Kuliner Sejak 2015</p>
      </div>
    </div>

    <div class="about-content">
      <div class="about-container">
        <div class="about-text">
          <h2>Profil Kami</h2>
          <p>
            <strong>Modern Minimalis Kuliner</strong> hadir dari semangat menciptakan pengalaman bersantap yang bersih, elegan, dan tetap kaya rasa. Didirikan di Jakarta pada tahun 2015, kami mengusung konsep minimalis modern untuk menciptakan suasana makan yang nyaman dan tenang.
          </p>
          <p>
            Dengan pilihan bahan berkualitas dan sentuhan presentasi yang modern, setiap hidangan kami ciptakan untuk menenangkan mata dan memanjakan lidah.
          </p>
        </div>

        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed05?auto=format&fit=crop&w=800&q=80" alt="Interior Restoran Modern" class="about-img">
        </div>
      </div>

      <div class="mission-section">
        <h2>Visi & Misi Kami</h2>
        <div class="mission-cards">
          <div class="mission-card">
            <div class="mission-icon">✨</div>
            <h3>Desain Estetik</h3>
            <p>Memadukan arsitektur minimalis dengan kenyamanan ruang makan</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">🥗</div>
            <h3>Menu Sehat</h3>
            <p>Hidangan bersih dan sehat, disajikan dengan estetika yang menenangkan</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">🤝</div>
            <h3>Pelayanan Profesional</h3>
            <p>Kami mengedepankan keramahan dan kenyamanan pelanggan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url('https://images.unsplash.com/photo-1578862159324-278d4b1dfd37?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-overlay h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

.hero-overlay p {
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  padding: 60px 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.about-container {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.about-text h2,
.mission-section h2 {
  color: #4e342e;
  font-family: 'Playfair Display', serif;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.mission-section {
  text-align: center;
  margin-bottom: 60px;
}

.mission-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.mission-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-10px);
}

.mission-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.mission-card h3 {
  color: #6d4c41;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }

  .hero-overlay h1 {
    font-size: 2rem;
  }

  .hero-overlay p {
    font-size: 1.2rem;
  }
}
</style>
