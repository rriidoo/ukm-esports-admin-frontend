# UKM Esports Tel-U — Admin Frontend

Frontend React.js untuk halaman **Login Admin** berdasarkan desain referensi.

## Menjalankan project

```bash
npm install
npm run dev
```

## Struktur utama

```text
src/
├── assets/
│   └── logo.png
├── components/
│   ├── BrandHeader.jsx
│   ├── Footer.jsx
│   └── LoginCard.jsx
├── pages/
│   └── AdminLogin.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Catatan

- Layout dibuat responsive dan dioptimalkan untuk viewport laptop, termasuk ukuran kelas MacBook Air.
- Semua asset gambar disimpan di `src/assets`.
- Form sudah memiliki state React untuk email, password, remember me, serta toggle tampil/sembunyikan password.
- Fungsi submit masih berupa placeholder dan siap dihubungkan ke API/backend autentikasi.
