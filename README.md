Aplikasi Pemesanan Makanan dan Minuman - Rasa Nusantara
Aplikasi ini adalah sebuah proyek berbasis Vue.js yang dirancang untuk mensimulasikan sistem pemesanan makanan dan minuman secara daring (online). Aplikasi ini menargetkan pengalaman pengguna yang responsif, intuitif, dan profesional baik untuk pelanggan maupun untuk admin yang mengelola data menu makanan dan minuman.

Aplikasi ini mencakup seluruh alur pemesanan, mulai dari memilih makanan atau minuman, memasukkannya ke keranjang, melakukan pemesanan, melihat riwayat transaksi, serta memberikan ulasan dan rating terhadap produk yang tersedia.

Tujuan Proyek
Tujuan dari proyek ini adalah untuk menunjukkan pemahaman dan penerapan komponen-komponen penting dalam pengembangan frontend modern, seperti penggunaan framework Vue.js, manajemen state menggunakan Pinia, konsumsi data dari backend menggunakan axios, serta pembuatan user interface manual CSS dengan desain yang bersih dan profesional.

Proyek ini dibuat sebagai bagian dari Tugas Akhir/Ujian Akhir Semester mata kuliah Pengembangan Berbasis Komponen.

Fitur Pengguna (Customer)
Halaman Beranda (Home)
Halaman utama aplikasi menyambut pengguna dengan pesan pembuka serta tombol navigasi yang mengarahkan ke halaman daftar menu makanan, menu minuman, dan halaman keranjang belanja.

Daftar Menu Makanan
Menampilkan daftar makanan lengkap dengan foto, nama, harga, dan efek loading shimmer saat gambar dimuat.

Fitur "Tambah ke Keranjang" untuk menyimpan makanan ke dalam daftar belanja.

Fitur "Pesan Langsung" untuk melakukan pemesanan satu item tanpa masuk ke keranjang.

Fitur "Rating dan Ulasan":

Pengguna dapat memberikan rating (1-5) dan komentar.

Ditampilkan rata-rata rating yang dihitung dari semua ulasan.

Daftar Menu Minuman
Menampilkan daftar minuman dengan format dan fitur yang sama dengan daftar makanan.

Terdapat input rating dan komentar serta tombol kirim ulasan yang terhubung langsung ke server menggunakan JSON Server.

Keranjang Belanja
Menampilkan semua makanan dan minuman yang telah ditambahkan oleh pengguna.

Fitur untuk menghapus item dengan konfirmasi terlebih dahulu.

Fitur untuk memesan semua isi keranjang sekaligus dengan pop-up konfirmasi.

Perhitungan total harga otomatis.

Riwayat Pemesanan
Menyimpan data semua pemesanan yang dilakukan, baik dari menu langsung maupun dari keranjang.

Setiap pesanan ditampilkan dalam bentuk struk seperti nota kasir.

Terdapat tombol untuk menghapus riwayat tertentu.

Data pesanan mencakup item, total harga, dan waktu transaksi.

Halaman Tentang Kami (About Us)
Menampilkan sejarah dan latar belakang restoran "Rasa Nusantara".

Desain halaman dibuat elegan dan profesional dengan penataan teks dan warna yang rapi.

Fitur Admin
Halaman Login Admin
Admin dapat masuk ke halaman admin melalui login sederhana yang divalidasi menggunakan JSON Server.

Sistem login ini tidak menggunakan autentikasi kompleks, namun cukup untuk simulasi kebutuhan pengelolaan.

Dashboard Admin (Admin Menu)
Admin dapat melihat daftar semua makanan dan minuman.

Admin dapat menambahkan menu baru dengan form input yang mencakup nama, harga, kategori (makanan atau minuman), dan link gambar.

Admin dapat mengedit dan menghapus menu yang ada.

Terdapat fitur filter pencarian berdasarkan nama item untuk memudahkan pencarian menu.

Semua perubahan yang dilakukan oleh admin akan langsung tercermin di halaman pengguna.

Teknologi yang Digunakan
Vue.js 3 dengan Vite

Pinia untuk manajemen state global (cartStore, foodStore, drinkStore)

Vue Router untuk navigasi antar halaman

JSON Server sebagai simulasi REST API backend (menggunakan file db.json)

Axios untuk konsumsi data API (GET, POST, PUT, DELETE)

Manual CSS untuk styling agar terlihat lebih fleksibel dan profesional

Reactive UI dengan efek loading shimmer dan konfirmasi interaktif

Seluruh data makanan, minuman, rating, dan ulasan disimpan dalam file db.json.

Proyek ini cocok digunakan untuk pembelajaran frontend development, karena menggabungkan berbagai konsep penting seperti reactive state, REST API, modular component, dan pengelolaan form input.

Belum terdapat sistem autentikasi lanjutan (seperti token atau JWT), sehingga admin login hanya sebatas validasi berdasarkan data di server JSON.

Struktur dan tampilan sudah dioptimalkan untuk tampilan desktop, namun bisa dikembangkan lebih lanjut agar responsif untuk perangkat mobile.

Penutup
Proyek ini diharapkan bisa menjadi contoh aplikasi pemesanan online yang dapat dikembangkan lebih lanjut. Dengan struktur kode yang modular dan penggunaan tools modern, aplikasi ini bisa dijadikan dasar untuk proyek-proyek serupa di masa mendatang.

Jika Anda tertarik untuk menambahkan fitur baru seperti autentikasi JWT, pembayaran, dashboard statistik admin, atau responsivitas penuh untuk mobile, struktur proyek ini sudah cukup siap untuk dikembangkan lebih jauh.