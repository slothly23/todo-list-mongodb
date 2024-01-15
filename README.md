
# Dokumentasi

Repositori ini adalah backend aplikasi manajemen tugas (to-do list) yang dibangun dengan menggunakan Node.js, Express, dan MongoDB. Repositori ini menyediakan beberapa endpoint CRUD (Create, Read, Update, Delete) untuk mengelola daftar tugas.

## Daftar Isi

- [Instalasi](#instalasi)
- [Menjalankan Server](#menjalankan-server)
- [Endpoint API](#endpoint-api)
  - [POST /register](#post-register)
  - [POST /login](#post-login)
  - [GET /todos](#get-todos)
  - [GET /todos/:id](#get-todo-id)
  - [POST /todos](#post-todo)
  - [PATCH /todos/:id](#patch-todo-id)
  - [DELETE /todos/:id](#delete-todo-id)
- [Contoh Penggunaan](#contoh-penggunaan)
- [Lisensi](#lisensi)

## Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/slothly23/todo-list-mongodb.git
   ```

2. Masuk ke direktori repositori:

   ```bash
   cd todo-list-mongodb
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

4. Pastikan Anda telah menginstal MongoDB dan konfigurasikan koneksi ke MongoDB dalam file `.env`.

## Menjalankan Server

Untuk menjalankan server, gunakan perintah berikut:

```bash
npm start
```

Server akan berjalan di `http://localhost:3000` secara default. Anda dapat mengonfigurasi port dalam file `.env` jika diperlukan.

## Endpoint API

Berikut adalah daftar endpoint API yang tersedia:

### POST /login

**Deskripsi:** Endpoint ini digunakan untuk mendapatkan token login agar bisa mengakses todo

**Request:**

- **Metode:** POST
- **URL:** `/login`

**Response:**
- **Status 200 OK:** Mengembalikan token untuk bisa mengakses todo.
- **Contoh Respons Sukses:**

  ```json
  [
     {
    "token": "eyJhbGciOiJIUzI1NiJ9.Y29iYTI.HjRtg042hjZdPHsY2lr3yk-YFUBUzOJexxz0EBH8kIE"
    }
  ]
  ```

  copy token dan buat key authorization pada headers dan paste token tadi
  

### GET /todos

**Deskripsi:** Endpoint ini digunakan untuk menampilkan seluruh daftar tugas.

**Request:**

- **Metode:** GET
- **URL:** `/todos`

**Response:**

- **Status 401 Unauthorized: Missing token:** belum memasukkan token login pada headers.
-  **Status 200 OK:** Mengembalikan daftar seluruh tugas dalam format JSON.
- **Contoh Respons Sukses:**

  ```json
  [
     {
        "_id": "65a516114f86c4df1deac8b8",
        "title": "sarapan",
        "description": "tambah sayur",
        "isDone": false,
        "createdAt": "2024-01-15T11:25:05.332Z",
        "updatedAt": "2024-01-15T11:25:05.332Z",
        "__v": 0
    }
  ]
  ```

### GET /todos/:id

**Deskripsi:** Endpoint ini digunakan untuk menampilkan satu tugas berdasarkan ID tertentu.

**Request:**

- **Metode:** GET
- **URL:** `/todos/:id`
- **Parameter URL:** `id` (ID tugas yang dicari)

**Response:**

- **Status 401 Unauthorized: Missing token:** belum memasukkan token login pada headers.
- **Status 200 OK:** Mengembalikan tugas yang sesuai dengan ID dalam format JSON.
- **Status 500 Internal server error:** Jika ID tidak ditemukan.

### POST /todos

**Deskripsi:** Endpoint ini digunakan untuk menambahkan tugas baru.

**Request:**

- **Metode:** POST
- **URL:** `/todos`
- **Body Request:** Data tugas yang akan ditambahkan dalam format JSON.
- **Contoh Body Request:**

  ```json
  {
    "title": "Menyelesaikan laporan proyek",
    "description": "jangan ditunda"
  }
  ```

**Response:**

- **Status 401 Unauthorized: Missing token:** belum memasukkan token login pada headers.
- **Status 201 Add todo succes:** Jika tugas berhasil ditambahkan.
- **Status 500 Internal server error:** Jika data yang dikirim tidak valid.

### PATCH /todos/:id

**Deskripsi:** Endpoint ini digunakan untuk mengubah tugas berdasarkan ID tertentu.

**Request:**

- **Metode:** PUT
- **URL:** `/todos/:id`
- **Parameter URL:** `id` (ID tugas yang akan diubah)
- **Body Request:** Data tugas yang akan diubah dalam format JSON.
- **Contoh Body Request:**

  ```json
  {
    "title": "Menyelesaikan laporan proyek",
    "isDone": true
  }
  ```

**Response:**

- **Status 401 Unauthorized: Missing token:** belum memasukkan token login pada headers.
- **Status 200 Update todo success:** Jika tugas berhasil diubah.
- **Status 500 Internal server error:** Jika data yang dikirim tidak valid.

### DELETE /todos/:id

**Deskripsi:** Endpoint ini digunakan untuk menghapus tugas berdasarkan ID tertentu.

**Request:**

- **Metode:** DELETE
- **URL:** `/todos/:id`
- **Parameter URL:** `id` (ID tugas yang akan dihapus)

**Response:**

- **Status 401 Unauthorized: Missing token:** belum memasukkan token login pada headers.
- **Status 200 Delete todo success:** Jika tugas berhasil dihapus.
- **Status 500 Internal server error:** Jika ID tidak ditemukan.

## Contoh Penggunaan

Berikut adalah contoh penggunaan endpoint API dengan menggunakan perangkat lunak seperti [Postman](https://www.postman.com/) atau [curl](https://curl.se/):

- Menambahkan user baru ke database: `POST http://localhost:5000/register`
- Melakukan login untuk mendapatkan token: `POST http://localhost:5000/login`
- Mendapatkan seluruh tugas: `GET http://localhost:5000/todos`
- Mendapatkan tugas berdasarkan ID: `GET http://localhost:5000/todos/:id`
- Menambahkan tugas baru: `POST http://localhost:5000/todos`
- Mengubah tugas berdasarkan ID: `PATCH http://localhost:5000/todos/:id`
- Menghapus tugas berdasarkan ID: `DELETE http://localhost:5000/todos/:id`
- Menghapus semua tugas: `DELETE http://localhost:5000/todos`

Pastikan Anda mengganti `:id` dengan ID yang sesuai dalam penggunaan praktis.

## Lisensi

Dokumentasi ini dilisensikan di bawah [Lisensi MIT](LICENSE.md).
