<template>
  <div class="history-page">
    <div class="page-header">
      <h2 class="page-title">Riwayat Pesanan</h2>
      <p class="page-subtitle">Daftar transaksi Anda di Rasa Nusantara</p>
    </div>

    <div v-if="orders.length === 0" class="empty-state">
      <div class="empty-icon">📝</div>
      <h3>Belum ada pesanan</h3>
      <p>Pesanan Anda akan muncul di sini setelah melakukan transaksi</p>
      <router-link to="/menu" class="browse-btn">Lihat Menu</router-link>
    </div>

    <div class="order-list">
      <div
        v-for="order in orders"
        :key="order.id"
        class="order-card"
        :id="'receipt-' + order.id"
      >
        <div class="order-header">
          <div class="order-meta">
            <h3 class="order-number">Pesanan #TX-{{ order.id }}</h3>
            <p class="order-date">
              <span class="icon">📅</span> {{ formatDate(order.timestamp) }}
            </p>
          </div>
          <div class="order-status" :class="getStatusClass(order.status)">
            {{ order.status || 'Selesai' }}
          </div>
        </div>

        <div class="order-items">
          <div v-for="item in order.items" :key="item.id" class="order-item">
            <div class="item-info">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-quantity">×{{ item.quantity || 1 }}</span>
            </div>
            <span class="item-price">Rp {{ formatPrice(item.price) }}</span>
          </div>
        </div>

        <div class="order-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>Rp {{ formatPrice(order.subtotal || order.total) }}</span>
          </div>
          <div class="summary-row" v-if="order.serviceFee">
            <span>Biaya Layanan:</span>
            <span>Rp {{ formatPrice(order.serviceFee) }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>Rp {{ formatPrice(order.total) }}</span>
          </div>
        </div>

        <div class="verification-section">
          <div class="qr-code">
            <img
              :src="`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=TX-${order.id}`"
              alt="QR Code Verifikasi"
            />
            <p class="qr-caption">Scan untuk verifikasi</p>
          </div>
          <div class="order-actions">
            <button @click="cetak(order.id)" class="print-btn">
              <span class="icon">🖨️</span> Cetak
            </button>
            <button @click="unduhPDF(order.id)" class="download-btn">
              <span class="icon">⬇️</span> Unduh
            </button>
            <button @click="hapusRiwayat(order.id)" class="delete-btn">
              <span class="icon">🗑️</span> Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import html2pdf from 'html2pdf.js'

export default {
  setup() {
    const orders = ref([])

    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/orders')
        // Add calculated subtotal if not present
        orders.value = data.map(order => ({
          ...order,
          subtotal: order.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
        }))
      } catch (err) {
        console.error('Gagal mengambil riwayat', err)
      }
    }

    const hapusRiwayat = async (id) => {
      if (confirm('Hapus pesanan ini dari riwayat?')) {
        await axios.delete(`http://localhost:3000/orders/${id}`)
        await fetchOrders()
      }
    }

    const cetak = (id) => {
      const element = document.getElementById(`receipt-${id}`)
      const printWindow = window.open('', '_blank')
      printWindow.document.write('<html><head><title>Cetak Struk</title>')
      printWindow.document.write(`
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .order-card { max-width: 100%!important; box-shadow: none!important; }
          .order-actions { display: none!important; }
        </style>
      `)
      printWindow.document.write('</head><body>')
      printWindow.document.write(element.innerHTML)
      printWindow.document.write('</body></html>')
      printWindow.document.close()
      printWindow.print()
    }

    const unduhPDF = (id) => {
      const element = document.getElementById(`receipt-${id}`)
      const opt = {
        margin: 0.5,
        filename: `Struk-RasaNusantara-TX${id}.pdf`,
        html2canvas: { 
          scale: 2,
          logging: true,
          useCORS: true
        },
        jsPDF: { 
          unit: 'cm', 
          format: 'a5', 
          orientation: 'portrait' 
        }
      }
      html2pdf().set(opt).from(element).save()
    }

    const formatPrice = (n) => n.toLocaleString('id-ID')

    const formatDate = (dateString) => {
      const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return new Date(dateString).toLocaleDateString('id-ID', options)
    }

    const getStatusClass = (status) => {
      const statusMap = {
        'Selesai': 'completed',
        'Diproses': 'processing',
        'Dikirim': 'shipped',
        'Dibatalkan': 'cancelled'
      }
      return statusMap[status || 'Selesai']
    }

    onMounted(fetchOrders)

    return { 
      orders, 
      hapusRiwayat, 
      formatPrice, 
      formatDate,
      getStatusClass,
      cetak, 
      unduhPDF 
    }
  }
}
</script>

<style scoped>
.history-page {
  padding: 30px 5%;
  background: #f8f5f2;
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

.empty-state {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #95a5a6;
}

.empty-state h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.empty-state p {
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

.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.order-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #e0e0e0;
}

.order-meta {
  flex-grow: 1;
}

.order-number {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0 0 5px 0;
}

.order-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.order-status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.order-status.completed {
  background: #e8f5e9;
  color: #2e7d32;
}

.order-status.processing {
  background: #fff3e0;
  color: #e65100;
}

.order-status.shipped {
  background: #e3f2fd;
  color: #1565c0;
}

.order-status.cancelled {
  background: #ffebee;
  color: #c62828;
}

.order-items {
  margin-bottom: 15px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.item-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-name {
  font-weight: 500;
}

.item-quantity {
  font-size: 0.8rem;
  color: #95a5a6;
}

.item-price {
  font-weight: 500;
  color: #2e7d32;
}

.order-summary {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #e0e0e0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.summary-row.total {
  font-weight: bold;
  font-size: 1.1rem;
  color: #2e7d32;
  margin-top: 10px;
}

.verification-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px dashed #e0e0e0;
}

.qr-code {
  text-align: center;
}

.qr-code img {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  padding: 5px;
  border-radius: 8px;
  background: white;
}

.qr-caption {
  font-size: 0.8rem;
  color: #95a5a6;
  margin-top: 5px;
}

.order-actions {
  display: flex;
  gap: 10px;
}

button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.print-btn {
  background: #3498db;
  color: white;
}

.print-btn:hover {
  background: #2980b9;
}

.download-btn {
  background: #2e7d32;
  color: white;
}

.download-btn:hover {
  background: #1b5e20;
}

.delete-btn {
  background: #f5f5f5;
  color: #e74c3c;
}

.delete-btn:hover {
  background: #eeeeee;
}

@media (max-width: 600px) {
  .verification-section {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .order-actions {
    width: 100%;
    justify-content: center;
  }
  
  .order-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .order-status {
    align-self: flex-start;
  }
}
</style>