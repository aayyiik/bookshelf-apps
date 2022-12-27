# Halo semua! 

Project kali ini bernama **Aplikasi BookShelf**.\
**Apliksi BookShelf** adalah Aplikasi Pengelolaan Data Menggunakan DOM dan Web Storage

Gambaran Sistem :
Sistem Informasi ini terdiri dari proses :
Fitur yang harus ada pada aplikasi.

1. Mampu Menambahkan Data Buku
    - Bookshelf Apps harus mampu menambahkan data buku baru.\
     {
      id: string | number,
      title: string,
      author: string,
      year: number,
      isComplete: boolean,
    }

2. Memiliki Dua Rak Buku
    - Bookshelf Apps harus memiliki 2 Rak buku. Yakni, “Belum selesai dibaca” dan “Selesai dibaca”.
    - Rak buku "Belum selesai dibaca" hanya menyimpan buku jika properti isComplete bernilai false.
    - Rak buku "Selesai dibaca" hanya menyimpan buku jika properti isComplete bernilai true.
3. Dapat Memindahkan Buku antar Rak
    - Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dipindahkan di antara keduanya.
4. Dapat Menghapus Data Buku
    - Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dihapus.
5. Manfaatkan localStorage dalam Menyimpan Data Buku
    - Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat bertahan walaupun halaman web ditutup.
    - Dengan begitu, Anda harus menyimpan data buku pada localStorage.

Proses pengembangan :
- JavaScript

Dikerjakan oleh: 
- Ari Lathifatul Chusna (saya)
