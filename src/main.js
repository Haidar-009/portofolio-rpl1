import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000, once: true });

const clickSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
);

// 1. DATA SISWA (Pastikan properti 'foto' sudah ada)
const daftarSiswa = [
  {
    nama: "Adinda",
    role: "Head of Sanitation",
    bio: "Roblox adalah bagian dari hidup aku.",
    ig: "#",
    github: "#",
    foto: "/img/Adinda.jpg",
  },
  {
    nama: "Afita",
    role: "Sports Coordinator",
    bio: "Suka  Kopi.",
    ig: "#",
    github: "#",
    foto: "/img/Afita.jpg",
  },
  {
    nama: "Aisna",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Aisna.jpg",
  },
  {
    nama: "Atik",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Atik.jpg",
  },
  {
    nama: "Atika sari",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Atika.jpg",
  },
  {
    nama: "Cinta",
    role: "Assistant Treasurer",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Cinta.jpg",
  },
  {
    nama: "Cracas",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/cracas.jpg",
  },
  {
    nama: "Danar",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Danar.jpg",
  },
  {
    nama: "Deyah",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Deyah.jpg",
  },
  {
    nama: "Dzaskia",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Dzaskia.jpg",
  },
  {
    nama: "Fika",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Fika.jpg",
  },
  {
    nama: "Grasela",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Grasela.jpg",
  },
  {
    nama: "Haidar",
    role: "FULL Stack Developer",
    bio: "Creator web ini.",
    ig: "#",
    github: "#",
    foto: "/img/Haidar.jpg",
  },
  {
    nama: "Ibnu",
    role: "Head of Security",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Ibnu.jpg",
  },
  {
    nama: "Kartika",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Kartika.jpg",
  },
  {
    nama: "Khuludah",
    role: "Secretary",
    bio: "Seperti teratai, biarkan dirimu tumbuh indah meski harus berawal dari kolam yang berlumpur.",
    ig: "https://www.instagram.com/khldh.hh?igsh=MWRicnd3dXAzaDhiMg==",
    github: "https://www.tiktok.com/@kldefghi?_r=1&_t=ZS-95IlOzG96Dy",
    foto: "/img/Khuludah.jpg",
  },
  {
    nama: "Lezio",
    role: "Class VP - Council",
    bio: "hiduplah dengan karaktermu sendiri, jangan merubah dirimu hanya untuk di sukai.",
    ig: "https://www.instagram.com/zynive_?igsh=MW1kaTdjbDVuY3RvaA==",
    github: "https://www.tiktok.com/@leziozio4?_r=1&_t=ZS-95IsY7VkUQj",
    foto: "/img/Lezio.jpg",
  },
  {
    nama: "Lila",
    role: "Discipline Coordinator - Council ",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Lila.jpg",
  },
  {
    nama: "Maulidiah Nurkhasanah",
    role: "Pelajar",
    bio: "at least i’ve tried to be better every day",
    ig: "https://www.instagram.com/lldiiaaaa?igsh=ODI4bGFidGI5OWcz&utm_source=qr",
    github: "https://www.tiktok.com/@l1lidiaa?_r=1&_t=ZS-95Im7tOfe5d",
    foto: "/img/Maulidiah.jpeg",
  },
  {
    nama: "Maulin",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Maulin.jpg",
  },
  {
    nama: "M.Hafidz",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/M.Hafidz.jpg",
  },
  {
    nama: "M.Ilham",
    role: "Sports Coordinator",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/M.Ilham.jpg",
  },
  {
    nama: "Niis",
    role: "Religious Affairs Coordinator",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Niis.jpg",
  },
  {
    nama: "Nyimas",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Nyimas.jpg",
  },
  {
    nama: "Panca",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Panca.jpg",
  },
  {
    nama: "Rehan",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Rehan.jpg",
  },
  {
    nama: "Sabila",
    role: "Secretary - Council",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Sabila.jpg",
  },
  {
    nama: "Sahla",
    role: "Head of Sanitation",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Sahla.jpg",
  },
  {
    nama: "Saparudin",
    role: "Paskibra",
    bio: "Muda berkelana tua bercerita",
    ig: "https://www.instagram.com/faar07_?igsh=dnNvc3JnZzVwam9k&utm_source=qr",
    github: "#",
    foto: "/img/Saparudin.jpg",
  },
  {
    nama: "Sri ",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Sri rahayu.jpg",
  },
  {
    nama: "Triana ",
    role: "Treasurer",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Triana.jpg",
  },
  {
    nama: "veni ",
    role: "Pelajar",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/veni.jpg",
  },
  // Tambahkan data siswa lain di sini...
];

// --- LOGIKA HAMBURGER MENU ---
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    // 1. Toggle class hidden (muncul/hilang)
    mobileMenu.classList.toggle("hidden");

    // 2. Toggle class flex (penting supaya layoutnya vertikal rapi)
    mobileMenu.classList.toggle("flex");

    // Ganti icon hamburger jadi silang (X)
    const isHidden = mobileMenu.classList.contains("hidden");
    menuBtn.innerHTML = isHidden
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  });

  // Otomatis tutup menu kalau link diklik
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex"); // Jangan lupa hapus flex-nya juga

      // Kembalikan icon ke hamburger
      menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    });
  });
}

// Efek Running Text Programmer Style
const run1 = document.getElementById("run-1");
const run2 = document.getElementById("run-2");
const run3 = document.getElementById("run-3");

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;

  // Baris 1 & 3: Gerak ke kiri (Kecepatan Santai)
  if (run1) run1.style.transform = `translateX(-${scrollValue * 0.25}px)`;
  if (run3) run3.style.transform = `translateX(-${scrollValue * 0.15}px)`;

  // Baris 2: Gerak ke kanan (Paling Cepat & Offset biar gak bolong)
  if (run2) run2.style.transform = `translateX(${scrollValue * 0.45 - 800}px)`;
});

const container = document.getElementById("siswa-container");

// 2. FUNGSI RENDER (Hanya satu fungsi, sudah mendukung foto asli)
function renderSiswa(data) {
  if (!container) return;

  container.innerHTML = data
    .map((siswa, index) => {
      const delay = (index % 4) * 100;

      // Logika: Cek foto, kalau kosong baru pakai DiceBear
      const imageSrc = siswa.foto
        ? siswa.foto
        : `https://api.dicebear.com/7.x/avataaars/svg?seed=${siswa.nama}`;

      return `
      <div data-aos="fade-up" 
           data-aos-delay="${delay}" 
           onclick="openModal('${siswa.nama}')" 
           class="group cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 hover:border-indigo-500 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl shadow-indigo-100/50 dark:shadow-none">
        
        <div class="aspect-square rounded-4xl overflow-hidden mb-6 bg-slate-50 dark:bg-slate-900 shadow-inner relative">
          <div class="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <img src="${imageSrc}" 
               class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${siswa.nama}'">
        </div>
        
        <h3 class="text-xl font-bold text-slate-800 dark:text-white tracking-tight">${siswa.nama}</h3>
        <p class="text-indigo-500 dark:text-indigo-400 text-xs font-black uppercase mt-1 tracking-[0.2em]">${siswa.role}</p>
        
        <div class="w-8 h-1 bg-slate-100 dark:bg-slate-700 mt-4 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-700"></div>
      </div>
    `;
    })
    .join("");
}

// 3. FUNGSI MODAL
window.openModal = (nama) => {
  const s = daftarSiswa.find((x) => x.nama === nama);
  if (!s) return;

  const imageSrc = s.foto
    ? s.foto
    : `https://api.dicebear.com/7.x/avataaars/svg?seed=${s.nama}`;

  // Isi konten modal
  document.getElementById("modal-img").src = imageSrc;
  document.getElementById("modal-nama").innerText = s.nama;
  document.getElementById("modal-role").innerText = s.role;
  document.getElementById("modal-bio").innerText = s.bio;

  // Isi link sosmed (Kalau datanya ada, kalau gak ada kasih #)
  document.getElementById("modal-ig").href = s.ig || "#";
  document.getElementById("modal-tt").href = s.tiktok || "#"; // Pastikan di data daftarSiswa ada properti 'tiktok'

  // Munculkan modal
  const modal = document.getElementById("modal-siswa");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Matikan scroll body biar gak lari-lari
  document.body.style.overflow = "hidden";
};

window.closeModal = () => {
  const modal = document.getElementById("modal-siswa");
  modal.classList.remove("flex");
  modal.classList.add("hidden");

  // Aktifkan scroll body kembali
  document.body.style.overflow = "auto";
};

// 4. LOGIKA SEARCH
const searchInput = document.getElementById("search-siswa");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = daftarSiswa.filter(
      (s) =>
        s.nama.toLowerCase().includes(keyword) ||
        s.role.toLowerCase().includes(keyword),
    );
    renderSiswa(filtered);
  });
}

// 5. DARK MODE (DENGAN MEMORY)
const darkToggle = document.getElementById("dark-toggle");
const darkIcon = document.getElementById("dark-icon");

// Fungsi untuk update ikon saja
const updateIcon = () => {
  if (darkIcon) {
    darkIcon.innerText = document.documentElement.classList.contains("dark")
      ? "☀️"
      : "🌙";
  }
};

// Cek simpanan sebelumnya pas web baru dibuka
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
updateIcon();

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    // Efek Suara
    if (typeof clickSound !== "undefined") clickSound.play();

    // Switch Class
    document.documentElement.classList.toggle("dark");

    // Simpan pilihan ke Browser (LocalStorage)
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }

    updateIcon();
  });
}

// --- LOGIKA LIGHTBOX ALBUM ---
let currentAlbumIndex = 0;
let albumData = [];

// Fungsi untuk inisialisasi data album (dipanggil otomatis)
function initAlbum() {
  const albumItems = document.querySelectorAll("#album .group");
  albumData = Array.from(albumItems).map((item) => ({
    src: item.querySelector("img").src,
    title: item.querySelector("h4").innerText,
    desc: item.querySelector("p").innerText,
  }));

  // Tambahkan event click ke setiap item album
  albumItems.forEach((item, index) => {
    item.style.cursor = "pointer";
    item.onclick = () => openLightbox(index);
  });
}

window.openLightbox = (index) => {
  currentAlbumIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.replace("hidden", "flex");
  document.body.style.overflow = "hidden"; // Matikan scroll body
};

window.closeLightbox = () => {
  document.getElementById("lightbox").classList.replace("flex", "hidden");
  document.body.style.overflow = "auto"; // Aktifkan scroll body
};

function updateLightbox() {
  const item = albumData[currentAlbumIndex];
  document.getElementById("lightbox-img").src = item.src;
  document.getElementById("lightbox-title").innerText = item.title;
  document.getElementById("lightbox-desc").innerText = item.desc;
}

window.nextImage = () => {
  currentAlbumIndex = (currentAlbumIndex + 1) % albumData.length;
  updateLightbox();
};

window.prevImage = () => {
  currentAlbumIndex =
    (currentAlbumIndex - 1 + albumData.length) % albumData.length;
  updateLightbox();
};

// Navigasi pakai keyboard
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").classList.contains("flex")) {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  }
});

// --- LOGIKA TYPING EFFECT ---
const txtElement = document.getElementById("typing-text");
const words = ["CREATIVE", "SOLID", "XI RPL 1", "FUTURE CODER"];
let wait = 2000; // Jeda waktu saat teks sudah lengkap terketik
let isDeleting = false;
let txt = "";
let wordIndex = 0;

function type() {
  // Ambil index kata saat ini
  const current = wordIndex % words.length;
  const fullTxt = words[current];

  // Cek apakah sedang menghapus atau mengetik
  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }

  // Masukkan teks ke elemen HTML
  txtElement.innerHTML = txt;

  // Kecepatan ngetik (lebih cepat saat menghapus)
  let typeSpeed = isDeleting ? 100 : 200;

  // Jika kata sudah lengkap
  if (!isDeleting && txt === fullTxt) {
    typeSpeed = wait; // Berhenti sebentar di akhir kata
    isDeleting = true;
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    wordIndex++;
    typeSpeed = 500; // Jeda sebelum mulai ngetik kata baru
  }

  setTimeout(() => type(), typeSpeed);
}

// --- LOGIKA STATS COUNTER ---
const counters = document.querySelectorAll(".counter");
const speed = 200; // Semakin tinggi semakin lambat

const startCounter = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const duration = 2000; // 2 detik animasi
      const increment = target / (duration / 16); // 16ms = ~60fps

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count);
          requestAnimationFrame(updateCount); // Lebih mulus dari setTimeout
        } else {
          counter.innerText = target + (target > 1 ? "+" : "");
        }
      };
      updateCount();
      observer.unobserve(counter);
    }
  });
};

// Coding Quotes Logic
const quotes = [
  "Hidup itu kayak koding, banyak error tapi harus tetap dicari solusinya",
  "Satu titik koma (;) bisa ngerusak segalanya, begitu juga satu kesalahan kecil dalam hidup",
  "Jangan cuma jago copas kode, tapi harus paham logikanya juga",
  "Gak ada bug yang gak bisa diperbaiki, yang ada cuma programmer yang kurang kopi",
  "Masa depan kita itu di-build, bukan cuma di-download",
  "Error itu biasa, yang luar biasa itu kalau kamu gak nyerah buat benerinnya",
  "Logika komputer itu pasti, tapi masa depan XI RPL 1 harus lebih pasti",
  "Jangan takut sama 'Syntax Error', takutlah kalau kamu gak punya semangat lagi",
  "Setiap baris kode yang kita tulis hari ini adalah investasi buat masa depan",
  "Solidaritas RPL 1 itu kayak Git: Sekali di-commit, gak bakal hilang",
  "Kita bukan cuma sekadar teman sekelas, kita adalah satu repositori",
  "RPL 1: Datang sebagai user, pulang sebagai creator",
  "Kompak itu kuncinya, kalau satu error, semua ikut debugging",
  "Di sini kita belajar, bukan cuma ngetik tapi juga membangun masa depan",
  "Dunia ini berjalan di atas kode, dan kitalah yang memegang keyboard-nya",
  "Jangan berhenti pas capek, berhentilah pas programnya sudah 'Running'",
  "Dunia butuh solusimu, bukan cuma keluhanmu tentang error",
  "Setiap algoritma yang kamu buat hari ini adalah investasi buat masa depanmu",
  "Teknologi bakal terus update, pastikan skill kamu gak 'deprecated'",
  "Solidaritas RPL 1 itu kayak Git: Sekali di-commit, gak bakal hilang",
  "XI RPL 1: Dimana logika dan perasaan bertemu dalam satu file .json",
  "Kita bukan cuma teman sekelas, kita adalah satu ekosistem yang saling support",
  "Debugging bareng itu lebih asik daripada pusing sendirian.",
  "RPL 1: Datang sebagai user, berproses sebagai creator, lulus sebagai legend",
  "Jangan biarkan konflik internal jadi 'merge conflict' di kelas kita",
  "Koding bukan cuma soal nyuruh komputer kerja, tapi soal bagaimana kita menuangkan logika ke dalam karya",
  "Jangan cuma bangga pas program 'Running', banggalah pas kamu paham setiap baris yang kamu ketik",
  "Clean Code bukan pilihan, itu adalah bentuk tanggung jawab seorang programmer",
  "Logika yang rapi akan menghasilkan kode yang abadi",
  "Seorang programmer handal tidak lahir dari tutorial yang lancar, tapi dari error yang tidak kunjung selesai",
  "Komputer itu jujur, kalau ada yang salah, berarti instruksi kita yang kurang presisi",
  "Belajar koding itu kayak lari maraton, konsistensi lebih penting daripada kecepatan",
  "Gak ada bahasa pemrograman yang paling hebat, yang hebat adalah bagaimana kamu menggunakannya untuk memberi solusi",
  "Refactoring adalah cara kita menghargai diri kita di masa depan.",
  "Dokumentasi adalah surat cinta untuk dirimu sendiri dan rekan timmu di masa depan",
  "Programmer yang baik akan menulis kode yang manusia bisa mengerti, bukan cuma mesin",
  "Tantangan terbesar koding bukan sintaksis, tapi bagaimana cara memecahkan masalah besar menjadi potongan kecil",
  "Setiap bug yang kamu temukan adalah satu langkah lebih dekat menuju aplikasi yang sempurna",
  "Skill koding bisa dipelajari, tapi insting logika harus dilatih setiap hari",
  "Jangan memaksakan fitur kalau fondasi kodenya masih rapuh; bangunlah struktur yang kuat dulu",
  "Hardware punya batas, tapi imajinasi dan logika seorang programmer itu unlimited",
  "Koding adalah seni tingkat tinggi di mana kanvasnya adalah layar dan kuasnya adalah keyboard",
  "Jangan cuma copy-paste solusi, pahami alurnya supaya kamu gak tersesat di project berikutnya",
  "Teknologi bisa ganti tiap tahun, tapi dasar algoritma bakal tetap sama selamanya",
  "Jadilah programmer yang solutif, bukan cuma programmer yang sekadar 'bisa ngetik'",
  "Koding itu 10% ngetik, 90% bengong mikirin kenapa kodingannya nggak jalan pas di-run",
];

function shuffleQuote() {
  const quoteElement = document.getElementById("random-quote");
  if (quoteElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = `"${quotes[randomIndex]}"`;
  }
}

// Jalankan saat page load
document.addEventListener("DOMContentLoaded", shuffleQuote);

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const robotStatus = document.getElementById("robotStatus");

// 1. DATA PERINTAH (Mudah dikembangkan)
const commandList = [
  {
    cmd: "developer",
    desc: "Info pembuat sistem",
    response:
      "[ SYSTEM ]\nDev: Haidar\nRole: Lead Dev\nStatus: Coding with Coffee",
  },
  {
    cmd: "motivasi",
    desc: "Kata bijak hari ini",
    response:
      "[ WISDOM ]\n Error adalah cara Tuhan bilang kita harus istirahat sejenak.",
  },
  {
    cmd: "mentor",
    desc: "Daftar guru pembimbing",
    response: "[ INFO ]\nMentor: Fitri Yulianti, S.Pd.",
  },
  { cmd: "clear", desc: "Bersihkan terminal", response: "CLEAN" },
  {
    cmd: "secret",
    desc: "???",
    response:
      "[ SECRET ]\n Ssst! Kamu menemukan easter egg: XI RPL 1 ADALAH LEGENDA!",
  },
];

// 2. FUNGSI ANIMASI MENGETIK
// Hapus semua versi typeWriter lama, ganti dengan ini:
function typeWriter(text, element) {
  let i = 0;
  element.innerHTML = "";

  // Paksa warna hijau agar tetap terlihat di Light Mode
  element.style.color = "#00FF00";
  element.style.textShadow = "0 0 5px rgba(0, 255, 0, 0.7)";

  function typing() {
    if (i < text.length) {
      // Cek apakah karakter saat ini adalah awal tag HTML
      if (text.charAt(i) === "<") {
        let tagEnd = text.indexOf(">", i);
        if (tagEnd !== -1) {
          element.innerHTML += text.substring(i, tagEnd + 1);
          i = tagEnd + 1;
          return typing();
        }
      }

      element.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
      i++;
      setTimeout(typing, 15);

      if (terminalOutput) {
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    } else {
      if (robotStatus) {
        robotStatus.innerText = "STATUS: IDLE";
        robotStatus.classList.remove("text-yellow-400", "text-indigo-400");
        robotStatus.classList.add("text-emerald-400");
      }
    }
  }
  typing();
}

function appendToTerminal(text, isUser = false) {
  // Container utama untuk setiap baris pesan
  const wrapper = document.createElement("div");
  // Jika user, taruh di kanan (justify-end), jika bot di kiri (justify-start)
  wrapper.className = `flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4 px-4`;

  const bubble = document.createElement("div");

  if (isUser) {
    // Style gelembung chat User (Warna Indigo/Biru)
    bubble.className =
      "bg-indigo-600 text-white px-4 py-2 rounded-2xl rounded-tr-none shadow-lg font-mono text-sm border border-indigo-400/30 relative z-10";
    bubble.innerHTML = text;
    wrapper.appendChild(bubble);
  } else {
    // Style gelembung chat Bot (Transparan Glassmorphism)
    bubble.className =
      "bg-slate-900/60 backdrop-blur-md text-[#00FF00] px-5 py-3 rounded-2xl rounded-tl-none border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] font-mono text-sm leading-relaxed relative z-10 max-w-[85%]";
    wrapper.appendChild(bubble);

    // Jalankan animasi ngetik di dalam bubble bot
    typeWriter(text, bubble);
  }

  terminalOutput.appendChild(wrapper);

  // Auto scroll ke bawah
  setTimeout(() => {
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }, 100);
}

function processCommand(cmd) {
  const lowerCmd = cmd.toLowerCase().trim();
  if (!lowerCmd) return;

  appendToTerminal(cmd, true);

  // Efek Mikir
  robotStatus.innerText = "STATUS: THINKING";
  robotStatus.classList.replace("text-indigo-400", "text-yellow-400");

  setTimeout(() => {
    // LOGIKA HELP DENGAN PERULANGAN
    if (lowerCmd === "help") {
      let helpMsg = "PERINTAH TERSEDIA:\n";
      commandList.forEach((item) => {
        if (item.cmd !== "secret") {
          // Sembunyikan perintah rahasia dari list help
          helpMsg += `- <span class="text-indigo-400">${item.cmd}</span> : ${item.desc}\n`;
        }
      });
      appendToTerminal(helpMsg);
    } else if (lowerCmd === "clear") {
      terminalOutput.innerHTML = "";
      robotStatus.innerText = "STATUS: IDLE";
      robotStatus.classList.replace("text-yellow-400", "text-indigo-400");
    } else {
      // CARI DI LIST COMMAND
      const found = commandList.find((c) => c.cmd === lowerCmd);
      if (found) {
        appendToTerminal(found.response);
      } else {
        appendToTerminal(
          `[ ERROR ] Perintah '${cmd}' tidak dikenali. Ketik 'help'.`,
        );
      }
    }
  }, 400);
}

// Event Listener
terminalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processCommand(terminalInput.value);
    terminalInput.value = "";
  }
});

// Ganti bagian terminalBody kamu menjadi seperti ini:
const terminalSection = document.getElementById("terminal-section"); // Gunakan ID section yang ada
const triggerFocus = () => {
  if (terminalInput) terminalInput.focus();
};

if (terminalSection) {
  terminalSection.addEventListener("click", triggerFocus);
  terminalSection.addEventListener("touchstart", triggerFocus);
}

const counterObserver = new IntersectionObserver(startCounter, {
  threshold: 0.5,
});

counters.forEach((counter) => counterObserver.observe(counter));

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  shuffleQuote();
  type();
  renderSiswa(daftarSiswa);

  // Inisialisasi Album setelah render (beri jeda sedikit agar DOM siap)
  setTimeout(initAlbum, 1000);

  // Observasi counter
  counters.forEach((counter) => counterObserver.observe(counter));
});

// Jalankan render pertama kali
renderSiswa(daftarSiswa);
