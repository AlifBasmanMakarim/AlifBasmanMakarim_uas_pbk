<template>
  <div class="admin-dashboard">
    <div class="sidebar">
      <div class="logo">
        <h2>🍽️ Rasa Nusantara</h2>
        <p>Admin Dashboard</p>
      </div>
      <nav class="admin-nav">
        <router-link to="/admin/dashboard" class="nav-item active">
          <span class="icon">📊</span>
          <span>Dashboard</span>
        </router-link>
        <router-link to="/admin/menu" class="nav-item">
          <span class="icon">📋</span>
          <span>Kelola Menu</span>
        </router-link>
        <router-link to="/admin/orders" class="nav-item">
          <span class="icon">📦</span>
          <span>Pesanan</span>
        </router-link>
        <router-link to="/admin/reviews" class="nav-item">
          <span class="icon">⭐</span>
          <span>Ulasan</span>
        </router-link>
        <router-link to="/admin/settings" class="nav-item">
          <span class="icon">⚙️</span>
          <span>Pengaturan</span>
        </router-link>
      </nav>
    </div>

    <div class="main-content">
      <div class="header">
        <h1>Dashboard Admin</h1>
        <div class="user-info">
          <span class="welcome">Selamat datang, Admin</span>
          <button class="logout-btn" @click="logout">
            <span class="icon">🚪</span>
            <span>Keluar</span>
          </button>
        </div>
      </div>

      <div class="dashboard-cards">
        <div class="card">
          <div class="card-header">
            <span class="icon">💰</span>
            <h3>Pendapatan Hari Ini</h3>
          </div>
          <div class="card-value">Rp 2.450.000</div>
          <div class="card-change positive">+12% dari kemarin</div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="icon">📦</span>
            <h3>Pesanan Baru</h3>
          </div>
          <div class="card-value">8</div>
          <div class="card-change positive">+2 dari kemarin</div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="icon">🍽️</span>
            <h3>Menu Terpopuler</h3>
          </div>
          <div class="card-value">Nasi Goreng</div>
          <div class="card-change">15 pesanan hari ini</div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="icon">⭐</span>
            <h3>Ulasan Baru</h3>
          </div>
          <div class="card-value">5</div>
          <div class="card-change negative">-1 dari kemarin</div>
        </div>
      </div>

      <div class="recent-orders">
        <h2>Pesanan Terakhir</h2>
        <table>
          <thead>
            <tr>
              <th>ID Pesanan</th>
              <th>Pelanggan</th>
              <th>Total</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in recentOrders" :key="order.id">
              <td>#{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>Rp {{ formatPrice(order.total) }}</td>
              <td>
                <span :class="'status-' + order.status.toLowerCase()">{{ order.status }}</span>
              </td>
              <td>
                <button class="action-btn" @click="viewOrder(order.id)">Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      recentOrders: [
        { id: 'TX-1001', customer: 'Budi Santoso', total: 125000, status: 'Diproses' },
        { id: 'TX-1000', customer: 'Ani Wijaya', total: 85000, status: 'Selesai' },
        { id: 'TX-999', customer: 'Rudi Hermawan', total: 150000, status: 'Dikirim' },
        { id: 'TX-998', customer: 'Siti Rahayu', total: 75000, status: 'Selesai' },
        { id: 'TX-997', customer: 'Dewi Kartika', total: 110000, status: 'Dibatalkan' }
      ]
    }
  },
  methods: {
    logout() {
      // Logout logic here
      alert('Anda telah keluar dari sistem admin')
    },
    viewOrder(id) {
      // View order detail logic
      alert(`Melihat detail pesanan ${id}`)
    },
    formatPrice(n) {
      return n.toLocaleString('id-ID')
    }
  }
}
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 20px 0;
}

.logo {
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 20px;
}

.logo h2 {
  margin: 0;
  font-size: 1.5rem;
}

.logo p {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #bdc3c7;
}

.admin-nav {
  display: flex;
  flex-direction: column;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.3s;
}

.nav-item:hover {
  background: rgba(255,255,255,0.1);
}

.nav-item.active {
  background: #3498db;
}

.nav-item .icon {
  margin-right: 10px;
  font-size: 1.1rem;
}

.main-content {
  flex: 1;
  background: #f5f7fa;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.header h1 {
  margin: 0;
  color: #2c3e50;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.welcome {
  color: #7f8c8d;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #c0392b;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.card-header .icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.card-header h3 {
  margin: 0;
  font-size: 1rem;
  color: #7f8c8d;
}

.card-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
}

.card-change {
  font-size: 0.9rem;
}

.card-change.positive {
  color: #27ae60;
}

.card-change.negative {
  color: #e74c3c;
}

.recent-orders {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.recent-orders h2 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background: #f5f7fa;
  color: #7f8c8d;
  font-weight: 500;
}

.status-diproses {
  color: #f39c12;
  background: #fff3e0;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.status-selesai {
  color: #27ae60;
  background: #e8f5e9;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.status-dikirim {
  color: #3498db;
  background: #e3f2fd;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.status-dibatalkan {
  color: #e74c3c;
  background: #ffebee;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.action-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.action-btn:hover {
  background: #2980b9;
}

@media (max-width: 1200px) {
  .dashboard-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
  }
  
  .dashboard-cards {
    grid-template-columns: 1fr;
  }
}
</style>