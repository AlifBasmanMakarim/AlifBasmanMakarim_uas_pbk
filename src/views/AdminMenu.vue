<template>
  <div class="admin-menu">
    <h2>Kelola Menu</h2>

    <!-- Alert -->
    <div v-if="alert.message" :class="['alert', alert.type]">
      {{ alert.message }}
    </div>

    <form @submit.prevent="submitForm">
      <label>Nama:</label>
      <input v-model="form.name" required />

      <label>Harga:</label>
      <input type="number" v-model.number="form.price" required />

      <label>Gambar (URL):</label>
      <input v-model="form.image" placeholder="https://..." />

      <label>Kategori:</label>
      <select v-model="form.category" :disabled="form.editMode">
        <option value="foods">Makanan</option>
        <option value="drinks">Minuman</option>
      </select>

      <button type="submit">
        {{ form.editMode ? 'Simpan Perubahan' : 'Tambah Menu' }}
      </button>
      <button v-if="form.editMode" type="button" @click="batalEdit" class="cancel">Batal</button>
    </form>

    <!-- Filter Pencarian -->
    <label>Pencarian:</label>
    <input v-model="search" placeholder="Cari menu..." />

    <!-- Daftar Menu -->
    <div class="preview-list">
      <h3>Daftar {{ form.category === 'foods' ? 'Makanan' : 'Minuman' }}</h3>
      <ul>
        <li v-for="item in filteredItems" :key="item.id" class="preview-item">
          <img :src="item.image" alt="gambar" />
          <div class="item-info">
            <strong>{{ item.name }}</strong>
            <span>Rp {{ formatPrice(item.price) }}</span>
          </div>
          <div class="actions">
            <button @click="editItem(item)">Edit</button>
            <button @click="hapusItem(item.id)">Hapus</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const form = ref({
      id: null,
      name: '',
      price: '',
      image: '',
      category: 'foods',
      editMode: false
    })

    const foods = ref([])
    const drinks = ref([])
    const alert = ref({ message: '', type: '' })
    const search = ref('')

    const loadData = async () => {
      try {
        const [f, d] = await Promise.all([
          axios.get('http://localhost:3000/foods'),
          axios.get('http://localhost:3000/drinks')
        ])
        foods.value = f.data
        drinks.value = d.data
      } catch (err) {
        showAlert('Gagal memuat data.', 'error')
      }
    }

    const submitForm = async () => {
      const payload = {
        name: form.value.name,
        price: form.value.price,
        image: form.value.image
      }

      const endpoint = `http://localhost:3000/${form.value.category}`

      try {
        if (form.value.editMode) {
          await axios.put(`${endpoint}/${form.value.id}`, payload)
          showAlert('Menu berhasil diperbarui.', 'success')
        } else {
          await axios.post(endpoint, payload)
          showAlert('Menu berhasil ditambahkan.', 'success')
        }
        await loadData()
        resetForm()
      } catch (err) {
        showAlert('Gagal menyimpan data.', 'error')
      }
    }

    const hapusItem = async (id) => {
      const category = form.value.category
      if (confirm(`Yakin ingin menghapus item dari ${category}?`)) {
        try {
          await axios.delete(`http://localhost:3000/${category}/${id}`)
          showAlert('Menu berhasil dihapus.', 'success')
          await loadData()
        } catch (err) {
          showAlert('Gagal menghapus menu.', 'error')
        }
      }
    }

    const editItem = (item) => {
      form.value = {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: form.value.category,
        editMode: true
      }
    }

    const batalEdit = () => {
      resetForm()
    }

    const resetForm = () => {
      form.value = {
        id: null,
        name: '',
        price: '',
        image: '',
        category: form.value.category,
        editMode: false
      }
    }

    const currentItems = computed(() =>
      form.value.category === 'foods' ? foods.value : drinks.value
    )

    const filteredItems = computed(() =>
      currentItems.value.filter(item =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
      )
    )

    const showAlert = (msg, type) => {
      alert.value = { message: msg, type }
      setTimeout(() => (alert.value.message = ''), 3000)
    }

    const formatPrice = (n) => n.toLocaleString('id-ID')

    onMounted(() => {
      loadData()
    })

    return {
      form,
      foods,
      drinks,
      alert,
      search,
      filteredItems,
      submitForm,
      hapusItem,
      editItem,
      batalEdit,
      formatPrice
    }
  }
}
</script>

<style scoped>
.admin-menu {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Alert Styles */
.alert {
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.alert.success {
  background-color: #e8f5e9;
  color: #2e7d32;
  border-left: 4px solid #2e7d32;
}

.alert.error {
  background-color: #ffebee;
  color: #c62828;
  border-left: 4px solid #c62828;
}

/* Form Styles */
form {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2c3e50;
}

input, select {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
}

input:focus, select:focus {
  border-color: #2e7d32;
  outline: none;
}

input::placeholder {
  color: #95a5a6;
  font-style: italic;
}

/* Button Styles */
button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #2e7d32;
  color: white;
  margin-right: 10px;
}

button[type="submit"]:hover {
  background-color: #1b5e20;
}

button.cancel {
  background-color: #f5f5f5;
  color: #2c3e50;
}

button.cancel:hover {
  background-color: #e0e0e0;
}

/* Preview List Styles */
.preview-list {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.preview-list h3 {
  margin-top: 0;
  color: #2c3e50;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.preview-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.preview-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background: #f9f9f9;
  transition: transform 0.3s;
}

.preview-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.preview-item img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 15px;
  border: 1px solid #eee;
}

.item-info {
  flex: 1;
}

.item-info strong {
  display: block;
  margin-bottom: 5px;
  color: #2c3e50;
}

.item-info span {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.actions {
  display: flex;
  gap: 8px;
}

.actions button {
  padding: 8px 12px;
  font-size: 0.9rem;
}

.actions button:first-child {
  background-color: #e3f2fd;
  color: #1565c0;
}

.actions button:first-child:hover {
  background-color: #bbdefb;
}

.actions button:last-child {
  background-color: #ffebee;
  color: #c62828;
}

.actions button:last-child:hover {
  background-color: #ffcdd2;
}

/* Search Input */
input[type="text"] {
  margin-bottom: 25px;
  padding-left: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2395a5a6' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 16px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .preview-list ul {
    grid-template-columns: 1fr;
  }
  
  .preview-item {
    flex-direction: column;
    text-align: center;
  }
  
  .preview-item img {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .actions {
    margin-top: 15px;
    justify-content: center;
  }
}
</style>