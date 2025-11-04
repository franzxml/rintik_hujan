// Ambil elemen kanvas
const kanvas = document.getElementById('kanvas-hujan');
const konteks = kanvas.getContext('2d');

// Atur ukuran awal kanvas
let lebar = window.innerWidth;
let tinggi = window.innerHeight;
kanvas.width = lebar;
kanvas.height = tinggi;

// Buat tetesan hujan
const tetesan = [];
const jumlahTetes = 200;

for (let i = 0; i < jumlahTetes; i++) {
  tetesan.push({
    x: Math.random() * lebar,
    y: Math.random() * tinggi,
    panjang: Math.random() * 15 + 10,
    kecepatan: Math.random() * 4 + 4
  });
}

// Fungsi menggambar hujan
function gambar() {
  konteks.clearRect(0, 0, lebar, tinggi);
  konteks.strokeStyle = 'rgba(0,150,255,0.6)';
  konteks.lineWidth = 1;
  konteks.beginPath();
  for (let i = 0; i < jumlahTetes; i++) {
    let t = tetesan[i];
    konteks.moveTo(t.x, t.y);
    konteks.lineTo(t.x, t.y + t.panjang);
  }
  konteks.stroke();
  gerak();
}

// Fungsi menggerakkan tetesan
function gerak() {
  for (let i = 0; i < jumlahTetes; i++) {
    let t = tetesan[i];
    t.y += t.kecepatan;
    if (t.y > tinggi) {
      t.y = -20;
      t.x = Math.random() * lebar;
    }
  }
}

// Jalankan animasi
function loop() {
  gambar();
  requestAnimationFrame(loop);
}

loop();

// Sesuaikan ukuran saat jendela diubah
window.addEventListener('resize', () => {
  lebar = window.innerWidth;
  tinggi = window.innerHeight;
  kanvas.width = lebar;
  kanvas.height = tinggi;
});