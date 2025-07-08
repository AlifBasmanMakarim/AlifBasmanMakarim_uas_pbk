<template>
  <div class="about-page">
    <div class="hero-section">
      <div class="hero-overlay">
        <h1>Tentang Rasa Nusantara</h1>
        <p>Melestarikan Kelezatan Kuliner Nusantara Sejak 2005</p>
      </div>
    </div>

    <div class="about-content">
      <div class="about-container">
        <div class="about-text">
          <h2>Cerita Kami</h2>
          <p>
            <strong>Rasa Nusantara</strong> memulai perjalanannya dari sebuah warung kecil di Yogyakarta pada tahun 2005. Didirikan oleh Ibu Siti dan Pak Joko, kami berkomitmen untuk melestarikan cita rasa autentik masakan Indonesia yang diwariskan turun-temurun.
          </p>
          <p>
            Dari resep keluarga yang sederhana, kami berkembang menjadi restoran yang dikenal karena keaslian rasa dan kualitas bahan-bahan pilihan. Setiap hidangan kami sajikan dengan penuh cinta dan kebanggaan akan kekayaan kuliner Nusantara.
          </p>
        </div>

        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Dapur Rasa Nusantara" class="about-img">
        </div>
      </div>

      <div class="mission-section">
        <h2>Visi & Misi Kami</h2>
        <div class="mission-cards">
          <div class="mission-card">
            <div class="mission-icon">🌱</div>
            <h3>Bahan Berkualitas</h3>
            <p>Menggunakan bahan-bahan segar dari petani dan produsen lokal terpercaya</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">👨‍🍳</div>
            <h3>Resep Autentik</h3>
            <p>Mempertahankan resep tradisional dengan sentuhan modern yang tepat</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">❤️</div>
            <h3>Pelayanan Ramah</h3>
            <p>Memberikan pengalaman bersantap yang hangat dan menyenangkan</p>
          </div>
        </div>
      </div>

      <div class="team-section">
        <h2>Tim Kami</h2>
        <div class="team-members">
          <div class="team-member">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Ibu Siti">
            <h3>Ibu Siti</h3>
            <p>Pendiri & Head Chef</p>
          </div>
          <div class="team-member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pak Joko">
            <h3>Pak Joko</h3>
            <p>Pendiri & Manajer</p>
          </div>
          <div class="team-member">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Mbak Rina">
            <h3>Mbak Rina</h3>
            <p>Chef Spesialis Sambal</p>
          </div>
        </div>
      </div>

      <div class="contact-cta">
        <h2>Ingin Tahu Lebih Banyak?</h2>
        <p>Kunjungi kami atau hubungi untuk pertanyaan lebih lanjut</p>
        <div class="contact-buttons">
          <a href = "https://www.instagram.com/firzatullaho?igsh=bHFvNzBmNjh2dTVn" to="/contact" class="contact-btn">Hubungi Kami</a>
          <a href="https://maps.app.goo.gl/v4UoXKxctyjzYWnu7?g_st=ipc" target="_blank" class="visit-btn">Lokasi Kami</a>
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
  color: #2c3e50;
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-image {
  flex: 1;
}

.about-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.mission-section {
  text-align: center;
  margin-bottom: 60px;
}

.mission-section h2 {
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 40px;
  font-family: 'Playfair Display', serif;
}

.mission-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.mission-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
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
  color: #2e7d32;
  margin-bottom: 15px;
}

.mission-card p {
  color: #555;
  line-height: 1.6;
}

.team-section {
  text-align: center;
  margin-bottom: 60px;
}

.team-section h2 {
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 40px;
  font-family: 'Playfair Display', serif;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.team-member {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 250px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.team-member img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #f8f5f2;
}

.team-member h3 {
  margin-bottom: 5px;
  color: #2c3e50;
}

.team-member p {
  color: #8d6e63;
  font-style: italic;
}

.contact-cta {
  text-align: center;
  background: #f8f5f2;
  padding: 60px;
  border-radius: 12px;
}

.contact-cta h2 {
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.contact-cta p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #555;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-btn, .visit-btn {
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-btn {
  background: #2e7d32;
  color: white;
}

.contact-btn:hover {
  background: #1b5e20;
}

.visit-btn {
  background: #8d6e63;
  color: white;
}

.visit-btn:hover {
  background: #6d4c41;
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
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>