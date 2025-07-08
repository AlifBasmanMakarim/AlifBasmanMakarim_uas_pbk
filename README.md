Berikut adalah versi **revisi deskripsi proyek** dengan **tema "Modern Minimalis Kuliner"** — tetap mempertahankan fitur utama, namun menyesuaikan gaya, nuansa, dan semangat modern minimalis:

---

## 🍴 Aplikasi Pemesanan Makanan dan Minuman

**Rasa Nusantara** adalah aplikasi pemesanan makanan dan minuman berbasis **Vue.js 3** yang mengusung tema **Modern Minimalis Kuliner**. Aplikasi ini menghadirkan antarmuka yang bersih, sederhana, dan responsif, memprioritaskan **kenyamanan pengguna** dan **efisiensi navigasi**, baik bagi pelanggan maupun admin.

---

### 🎯 Tujuan Proyek

Proyek ini dikembangkan untuk menunjukkan **kemampuan pengembangan frontend modern** menggunakan:

* Framework **Vue.js**
* **Pinia** sebagai manajemen state global
* **Axios** untuk konsumsi REST API dari **JSON Server**
* Desain **manual CSS** bergaya modern minimalis: layout bersih, warna netral, fokus pada tipografi dan tata ruang
* Simulasi alur kerja nyata sistem pemesanan online dari sisi pengguna dan admin

Proyek ini dibuat sebagai bagian dari **Tugas Akhir/Ujian Akhir Semester** untuk mata kuliah *Pengembangan Berbasis Komponen*.

---

### 👤 Fitur untuk Pengguna

#### Beranda

* Tampilan bersih dengan **navigasi utama minimalis**
* Akses cepat ke menu makanan, minuman, dan keranjang belanja

#### Menu Makanan & Minuman

* Galeri produk dengan **foto berkualitas**, nama, harga, dan loading shimmer
* Tombol **"Tambah ke Keranjang"** dan **"Pesan Langsung"**
* Sistem **Ulasan & Rating** (1–5 bintang + komentar)
* Rata-rata rating ditampilkan secara dinamis

#### Keranjang Belanja

* Tampilan item secara vertikal dengan **tata letak rapi**
* Fitur hapus item dengan **modal konfirmasi**
* Tombol **Pesan Semua**, lengkap dengan perhitungan total harga otomatis

#### Riwayat Pemesanan

* Struk digital setiap transaksi
* Tampilkan waktu, total, dan detail item
* Opsi hapus riwayat per transaksi

#### Tentang Kami

* Halaman dengan **tata letak editorial minimalis**
* Cerita singkat sejarah dan filosofi "Rasa Nusantara"

---

### 🛠️ Fitur Admin

#### Login Admin

* Login sederhana menggunakan validasi terhadap data JSON Server
* Tidak menggunakan autentikasi kompleks (cukup untuk simulasi)

#### Dashboard Admin

* Daftar makanan & minuman dalam tampilan **tabel clean**
* Tambah/edit/hapus menu via form input dengan validasi dasar
* Pencarian berdasarkan nama item
* Semua update tercermin langsung di tampilan pengguna

---

### ⚙️ Teknologi dan Arsitektur

| Teknologi            | Deskripsi                                               |
| -------------------- | ------------------------------------------------------- |
| Vue.js 3 + Vite      | Framework utama untuk SPA (Single Page Application)     |
| Pinia                | Manajemen state global (keranjang, makanan, minuman)    |
| Vue Router           | Navigasi halaman                                        |
| Axios                | Konsumsi data dari backend (GET/POST/PUT/DELETE)        |
| JSON Server          | Simulasi REST API dengan `db.json`                      |
| Manual CSS           | Desain bergaya modern minimalis                         |
| Efek Shimmer & Modal | UI interaktif untuk loading dan konfirmasi aksi penting |

---

### 💡 Pengembangan Selanjutnya

Proyek ini dapat dikembangkan lebih lanjut dengan:

* Sistem autentikasi berbasis JWT
* Integrasi metode pembayaran (simulasi atau gateway nyata)
* Dashboard statistik admin
* Desain responsif penuh untuk perangkat mobile
* Paginasi dan kategori menu

---

### 📌 Penutup

Dengan gaya **Modern Minimalis Kuliner**, aplikasi **Rasa Nusantara** menyajikan pengalaman pemesanan online yang **sederhana namun elegan**. Cocok sebagai studi kasus pengembangan frontend skala kecil-menengah dengan teknologi modern dan struktur modular.

---

Jika kamu ingin, saya bisa bantu buatkan README.md versi GitHub-nya atau pitch deck presentasi. Mau lanjut ke mana?
