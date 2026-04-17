import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true, // Animasi cuma sekali
  duration: 800,
  offset: 100, // Mulai animasi sedikit lebih awal agar terasa responsif
});

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
    foto: "/img/Cracas.jpg",
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
const words = [
  "XI RPL 1",
  "CREATIVE",
  "WEB DEVELOPER",
  "SOLID",
  "ANGKATAN 22",
  "SOFTWARE ENGGINER",
  "PROGRAMMER",
  "FUTURE CODER",
  "Programmer",
  "IT Support",
  "Data analis",
];
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
  "Sejago apa pun kamu, kalau belum backup data sebelum PC lab restart otomatis, kamu belum jadi legenda",
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
  "Seorang Software Engineer yang hebat tidak hanya memecahkan masalah dengan kode, tetapi tahu kapan masalah tersebut sebenarnya tidak butuh kode sama sekali",
  "Arsitektur yang baik bukan tentang membuat sistem yang sempurna, tapi tentang membuat sistem yang cukup fleksibel untuk diperbaiki saat ia gagal",
  "Di balik setiap interface yang indah, ada ratusan jam optimasi dan ribuan baris kode yang berjuang agar tetap sinkron",
  "Web adalah kanvas yang tidak pernah kering. Kita tidak sedang membangun monumen statis, melainkan organisme hidup yang terus beradaptasi dengan layar dan pengguna yang berbeda",
  "Jangan hanya membangun untuk mereka yang memiliki koneksi tercepat; bangunlah untuk mereka yang sangat membutuhkan informasi namun memiliki akses paling terbatas",
  "RPL mengajarkan kita bahwa 'selesai' hanyalah awal dari fase 'pemeliharaan'. Sebuah karya tidak berhenti saat di-deploy, melainkan saat ia berhenti berguna",
  "Dokumentasi adalah surat cinta untuk rekan satu timmu. Tanpanya, setiap perubahan kode adalah teka-teki yang menyakitkan",
  "Kualitas perangkat lunak bukanlah sebuah variabel yang bisa dikompromikan demi kecepatan; ia adalah fondasi yang menentukan seberapa jauh kita bisa melangkah",
  "Sebuah bug dalam aplikasi adalah masalah; sebuah bug dalam game yang menyenangkan sering kali disebut sebagai 'mekanik tersembunyi'. Namun, jangan biarkan itu menjadi alasan untuk malas melakukan debugging",
  "Game yang baik adalah dialog antara pengembang dan pemain, di mana setiap tantangan adalah pertanyaan dan setiap kemenangan adalah jawaban yang memuaskan",
  "Menulis kode itu mudah; menulis kode yang bisa dipahami manusia lain,termasuk dirimu di masa depan adalah seni yang sesungguhnya",
  "Apapun bidangmu, ingatlah bahwa komputer tidak pernah salah, mereka hanya melakukan apa yang kita perintahkan. Jadilah pemberi instruksi yang bijak",
  "Seorang DevOps yang sukses adalah mereka yang berhasil membuat dirinya sendiri 'tidak dibutuhkan' karena sistem yang ia bangun sudah berjalan dengan mulus secara mandiri",
  "Di era cloud, infrastruktur bukan lagi 'hewan peliharaan' yang kita rawat satu per satu dengan cinta, melainkan 'ternak' yang harus bisa kita kelola secara massal dan efisien",
  "Informasi adalah minyak baru, tetapi wawasan (insight) adalah mesin yang benar-benar menggerakkan dunia",
  "Kecerdasan Buatan tidak akan menggantikan kecerdasan manusia, tapi manusia yang menggunakan AI akan menggantikan mereka yang tidak menggunakannya",
  "Mesin belajar dari masa lalu yang kita berikan padanya. Jika kita memberikan data yang bias, kita tidak sedang menciptakan kecerdasan, melainkan prasangka digital",
  "Tujuan akhir AI bukan untuk membuat mesin berpikir seperti manusia, tapi untuk membantu manusia berpikir lebih jauh melampaui batas biologisnya",
  "Di dunia IT, berhenti belajar berarti mulai pensiun. Teknologi yang kamu banggakan hari ini bisa jadi artefak museum lima tahun lagi",
  "Ingatlah: Kode yang kamu tulis mungkin hanya bertahan beberapa tahun, tetapi dampak dari solusi yang kamu ciptakan bisa mengubah cara orang hidup selamanya",
  "Kesalahan logika adalah guru terbaik. Setiap kali sistemmu tumbang, itu adalah kesempatan untuk membangun fondasi yang lebih kuat",
  "Kesederhanaan adalah kecanggihan tertinggi. Jangan membuat solusi yang rumit jika solusi yang sederhana sudah cukup menyelesaikan masalah",
  "Tujuan akhir AI bukan untuk membuat mesin berpikir seperti manusia, tapi untuk membantu manusia berpikir lebih jauh melampaui batas biologisnya",
  "Keamanan bukanlah sebuah produk yang bisa kamu beli, melainkan sebuah proses yang harus kamu jalani setiap detik",
  "Satu-satunya sistem yang benar-benar aman adalah sistem yang dimatikan, dicor dalam beton, dan diletakkan di ruang berpelindung timah—tapi sayangnya, sistem itu tidak berguna",
  "Jika semuanya berjalan lancar, orang-orang akan bertanya apa yang kamu kerjakan. Jika semuanya rusak, orang-orang akan bertanya apa yang kamu kerjakan. Itulah takdir seorang administrator",
  "Kesabaran adalah spesifikasi hardware terpenting bagi seorang IT Support",
  "Layar boleh kecil, tapi tanggung jawabnya besar. Kamu tidak hanya membangun aplikasi, kamu sedang membangun pendamping hidup bagi pengguna",
  "Aplikasi yang hebat bukan tentang seberapa banyak fitur yang bisa kamu masukkan, tapi seberapa banyak hambatan yang bisa kamu hilangkan dari jari pengguna",
  "Di dunia mobile, satu detik adalah keabadian. Optimasi bukan pilihan, tapi keharusan",
  "Tugas QA bukan untuk merusak kode; kode tersebut sudah rusak sejak lahir. Tugas QA adalah membuktikannya sebelum pengguna merasakannya",
  "Seorang tester yang baik tidak hanya mencari bug, tapi mencari celah di mana ekspektasi bertemu dengan kenyataan yang pahit",
  "Jangan membenci tester yang menemukan kesalahanmu. Mereka adalah jaring pengaman yang mencegahmu jatuh di depan publik",
  "Tanpa kabel dan sinyal, awan (cloud) hanyalah uap air. Kita adalah orang-orang yang memastikan dunia tetap terhubung secara fisik",
  "Seorang Network Engineer tahu bahwa 'ping' adalah detak jantung dari konektivitas digital",
  "Jangan menertawakan kode lama yang berantakan; kode itulah yang membayar gajimu hari ini",
  "Desain yang baik adalah desain yang tidak disadari. Jika pengguna harus berpikir, berarti kamu gagal",
  "Teknologi hanyalah alat. Manusia adalah tujuannya. Jangan sampai kita terlalu sibuk memperbaiki mesin hingga lupa untuk siapa mesin itu dibuat",
  "Ilmu itu bukan apa yang dihafal, tapi apa yang dimanfaatkan",
  "Jika kamu tak sangup menahan lelah karena belajar, maka kamu harus derita karena kebodohan",
  "open a bokk and open your mind",
  "User Interface (UI) adalah tubuh, tapi User Experience (UX) adalah jiwa. Sesuatu yang cantik tanpa kegunaan hanyalah pajangan yang mengesalkan",
  "angan jatuh cinta pada desainmu; jatuh cintalah pada cara desainmu mempermudah hidup orang lain",
  "Seorang arsitek tidak membangun untuk hari ini, tapi untuk sepuluh tahun ke depan saat teknologi yang digunakan sekarang sudah dianggap kuno",
  "Kesederhanaan dalam struktur adalah bentuk kecanggihan yang paling sulit dicapai",
  "Data yang tidak memiliki cadangan (backup) adalah data yang sebenarnya tidak kamu inginkan. Jangan menangis saat ia hilang, karena kamu sudah membiarkannya pergi sejak awal",
  "Jangan pernah menghapus sebaris kode yang tidak kamu mengerti hanya karena ia terlihat 'aneh'. Bisa jadi itulah satu-satunya hal yang menahan seluruh sistem agar tidak runtuh",
  "Dalam dunia IT, logika akan membawamu dari A ke B, tetapi imajinasi dan ketabahan akan membawamu melampaui batas yang dianggap mustahil oleh orang lain",
  "Belajar RPL itu belajar sabar. Sabar nyari titik koma (;) yang hilang, dan sabar nunggu gradle build yang nggak selesai-selesai",
  "Jangan sombong kalau kodemu running di percobaan pertama. Justru di situlah kamu harus curiga, 'Kok bisa? Ada yang nggak beres nih'",
  "Cinta itu kayak coding. Kalau nggak ada kecocokan, mau dipaksa bagaimanapun hasilnya pasti error",
  "Di sekolah kita diajari bahasa pemrograman, tapi di industri kita belajar bahasa manusia agar program kita berguna",
  "Copy-paste itu sah saja, asal kamu paham apa yang kamu paste. Jangan jadi kurir kode, jadilah pemilik logika",
  "Guru kedua setelah bapak/ibu guru di kelas adalah Stack Overflow dan dokumentasi resmi",
  "Spesifikasi laptop bukan alasan untuk berhenti belajar. Kreativitas justru sering muncul saat sumber daya terbatas",
  "Teknologi berkembang tiap detik. Kalau kamu malas update ilmu, kamu bakal jadi software versi lama yang penuh bug",
  "Punya PC spek dewa nggak menjamin kamu jadi ahli kalau nggak pernah latihan ngoprek",
  "Tanpa error, kita nggak bakal pernah belajar cara kerja sistem yang sebenarnya",
  "Error adalah teman, bukan lawan",
  "Hardware bisa dibeli, Skill harus dicari",
  "Update terus, jangan mau stuck",
  "Jangan cuma mengejar sertifikat, kejar kompetensinya. Sertifikat bisa difotokopi, tapi logic dan insting troubleshooting nggak bisa dipalsukan",
  "Menulis kode itu seperti menulis puisi; jika kamu hanya menyontek, kamu tidak akan pernah tahu keindahan di balik setiap barisnya",
  "Jangan bangga karena aplikasimu punya banyak fitur. Banggalah jika kodemu rapi, efisien, dan tidak membuat guru yang membacanya sakit kepala",
  "Logika pemrograman adalah cara berpikir. Jika kamu bisa memecahkan masalah di layar, kamu seharusnya juga bisa memecahkan masalah dalam hidupmu",
  "Jangan hanya jadi pengguna teknologi yang manja. Jadilah orang yang paham mengapa sebuah data bisa terkirim dari satu benua ke benua lain",
  "Bertanyalah selagi masih di sekolah. Di dunia industri, kamu dibayar untuk memberikan jawaban, bukan hanya membawa pertanyaan",
  "Nilai 100 dari hasil copy-paste tidak akan menolongmu saat kamu duduk di depan pewawancara kerja. Kejujuran adalah compiler terbaik",
  "seorang teknisi yang tidak bisa menjaga alat kerjanya sendiri, sulit dipercaya untuk menjaga sistem orang lain",
  "Skill teknis akan membawamu dapat kerja, tapi soft skill dan cara bicaramu yang akan membuat karirmu naik ke atas",
  "Jangan pernah merasa kalah oleh mesin. Mesin hanya sehebat orang yang mengaturnya",
  "RPL itu bukan tentang seberapa cepat kamu mengetik, tapi seberapa kuat mentalmu saat melihat layar merah penuh error tapi nggak tahu salahnya di mana",
  "Logika pemrograman itu unik. Kita diajari untuk memecah masalah besar menjadi potongan kecil, supaya hidup nggak terasa seberat running aplikasi Android Studio di RAM 4GB",
  "Menyalin kode itu biasa, tapi memahami kenapa kode itu jalan adalah kewajiban. Kita bukan scanner, kita adalah engineer",
  "Stack Overflow dan ChatGPT adalah guru honorer yang nggak pernah tidur. Tapi ingat, mereka cuma asisten; otak utamanya tetap ada di kepala kita sendiri",
  "Di RPL, kalau kamu nggak tahu cara 'Googling' dengan benar, kamu sudah kalah sebelum berperang",
  "Waktu terasa berjalan 2x lebih cepat saat coding mendekati jam pengumpulan, apalagi kalau tiba-tiba laptop hang",
  "Satu orang yang coding, satu orang yang bikin laporan, satu orang yang kasih semangat, dan sisanya titip nama",
  "Jangan baper sama compiler. Dia jujur banget orangnya; kalau salah ya bilang salah, bukan diam terus ghosting",
  "Dunia IT berubah tiap detik. Kalau hari ini kita malas belajar framework baru, besok kita cuma jadi penonton kesuksesan orang lain",
  "Stay hungry, stay coding",
  "Eat, Sleep, Code, Debug, Repeat",
  "Eat, Sleep, Code, Debug, Repeat",
  "Eat, Sleep, Code, Debug, Repeat",
  "Jangan minder kalau kita merasa 'paling bodoh' di kelas. Di dunia RPL, yang menang bukan yang paling pintar sejak lahir, tapi yang paling tahan banting saat kodenya hancur berkali-kali",
  "Code never lies, comments sometimes do",
  "Only an RPL student understands the pure euphoria of seeing the words: 'Process finished with exit code 0",
  "In Game Dev, a bug is only a bug until it's funny—then it's a 'hidden feature.' But remember, players won't laugh if the feature crashes their PC",
  "We don't just write code; we choreograph experiences. If the player feels the adrenaline, the math was worth it",
  "Password '123456' is not a security measure; it's a welcome mat. In this field, paranoia is a professional virtue",
  "The best firewall is between the chair and the keyboard. Most 'hacks' aren't about breaking code; they're about tricking people",
  "AI won't take your job, but a human who knows how to use AI better than you will. Stay curious",
  "Software is the soul, Hardware is the body. One cannot thrive without the other—treat your thermal paste with respect",
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

/// --- 1. INISIALISASI & JAM ---
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const robotStatus = document.getElementById("robotStatus");
let userName = "User"; // Simpan nama user secara global

function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("real-time");
  if (timeElement) timeElement.innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// --- 2. DATA PERINTAH (Tetap pakai list kamu) ---
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
    desc: "Wali kelas XI RPL 1",
    response: "[ INFO ]\nMentor: Fitri Yulianti, S.Pd.",
  },
  { cmd: "clear", desc: "Bersihkan terminal", response: "CLEAN" },
  {
    cmd: "secret",
    desc: "???",
    hidden: true,
    response:
      "[ SECRET ]\n Ssst! Kamu menemukan easter egg:\n XI RPL 1 ADALAH LEGENDA!",
  },
];

// --- 3. FUNGSI ANIMASI MENGETIK
function typeWriter(text, element) {
  let i = 0;
  element.innerHTML = "";
  element.style.color = "#00FF00";
  element.style.textShadow = "0 0 5px rgba(0, 255, 0, 0.7)";

  function typing() {
    if (i < text.length) {
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
      if (terminalOutput)
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    } else {
      if (
        robotStatus &&
        !document.body.classList.contains("overdrive-active")
      ) {
        robotStatus.innerText = "STATUS: IDLE";
        robotStatus.className =
          "mt-4 text-indigo-400 font-mono text-sm border border-indigo-400 px-3 py-1 rounded-full animate-pulse";
      }
    }
  }
  typing();
}

// --- 4. FUNGSI APPEND MESSAGE ---
function appendToTerminal(text, isUser = false) {
  const wrapper = document.createElement("div");
  wrapper.className = `flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4 px-4`;
  const bubble = document.createElement("div");

  if (isUser) {
    bubble.className =
      "bg-indigo-600 text-white px-4 py-2 rounded-2xl rounded-tr-none shadow-lg font-mono text-sm border border-indigo-400/30 relative z-10";
    bubble.innerHTML = text;
  } else {
    bubble.className =
      "bg-slate-900/60 backdrop-blur-md text-[#00FF00] px-5 py-3 rounded-2xl rounded-tl-none border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] font-mono text-sm leading-relaxed relative z-10 max-w-[85%]";
    typeWriter(text, bubble);
  }
  wrapper.appendChild(bubble);
  terminalOutput.appendChild(wrapper);
  setTimeout(() => {
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }, 100);
}

// --- 5. LOGIC UTAMA PROSES PERINTAH ---
// --- 5. LOGIC UTAMA PROSES PERINTAH ---
function processCommand(cmd) {
  const lowerCmd = cmd.toLowerCase().trim();
  if (!lowerCmd) return;

  appendToTerminal(cmd, true);
  robotStatus.innerText = "STATUS: THINKING";
  robotStatus.className =
    "mt-4 text-yellow-400 font-mono text-sm border border-yellow-400 px-3 py-1 rounded-full animate-pulse";

  setTimeout(() => {
    // 1. Fitur: MY NAME IS
    if (lowerCmd.startsWith("my name is ")) {
      userName = cmd.substring(11);
      appendToTerminal(
        `[ SYSTEM ] Hello ${userName}! I have saved your profile to the session.`,
      );
      return;
    }

    // 2. Fitur: GOTO
    if (lowerCmd.startsWith("goto ")) {
      const target = lowerCmd.split(" ")[1];
      const section =
        document.getElementById(target + "-section") ||
        document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        appendToTerminal(
          `[ NAV ] Redirecting ${userName} to ${target.toUpperCase()}...`,
        );
      } else {
        appendToTerminal(`[ ERROR ] Section '${target}' not found.`);
      }
      return;
    }

    // 3. Fitur: FIND (Ditaruh di sini agar dibaca sebelum error)
    if (lowerCmd.startsWith("find ")) {
      const searchTerm = lowerCmd.substring(5).trim();
      // Kita cari semua div di dalam container siswa
      const container = document.getElementById("siswa-container");
      const cards = container.querySelectorAll("div");
      let found = false;

      cards.forEach((card) => {
        const nameElement = card.querySelector("h3");
        if (nameElement) {
          const studentName = nameElement.innerText.toLowerCase();

          if (studentName.includes(searchTerm)) {
            found = true;

            // Pastikan class student-card ada untuk keperluan styling highlight
            card.classList.add("student-card");

            // Scroll ke arah target
            card.scrollIntoView({ behavior: "smooth", block: "center" });

            // Beri efek highlight yang sudah kita buat di CSS
            card.classList.add("highlight-card");
            setTimeout(() => {
              card.classList.remove("highlight-card");
            }, 3000);
          }
        }
      });

      if (found) {
        appendToTerminal(
          `System: Index found for "${searchTerm}". Redirecting...`,
        );
      } else {
        appendToTerminal(
          `[ ERROR ] "${searchTerm}" is not registered in XI RPL 1 database.`,
        );
      }
      return;
    }

    // 4. Fitur: HELP
    if (lowerCmd === "help") {
      let helpMsg = `Halo ${userName}! Berikut perintahnya:\n`;
      commandList.forEach((item) => {
        if (!item.hidden)
          helpMsg += `- <span class="text-indigo-400">${item.cmd}</span> : ${item.desc}\n`;
      });
      helpMsg += `- <span class="text-indigo-400">find [nama]</span> : Cari siswa\n`;
      helpMsg += `- <span class="text-indigo-400">goto [id]</span> : Pindah section\n`;
      helpMsg += `- <span class="text-indigo-400">my name is [nama]</span> : Kenalan\n`;
      appendToTerminal(helpMsg);
    }

    // 5. Fitur: SUDO SU (Overdrive)
    else if (lowerCmd === "sudo su") {
      activateOverdrive();
    }

    // 6. Fitur: CLEAR
    else if (lowerCmd === "clear") {
      terminalOutput.innerHTML = "";
    }

    // 7. CARI DI LIST (Command Biasa)
    else {
      const found = commandList.find((c) => c.cmd === lowerCmd);
      if (found) {
        appendToTerminal(found.response);
      } else {
        appendToTerminal(
          `[ ERROR ] Command '${cmd}' unrecognized. Type 'help'.`,
        );
      }
    }
  }, 500); // Delay sedikit untuk feel "berpikir"
}

// Contoh bagian generator kamu
daftarSiswa.forEach((siswa) => {
  const card = document.createElement("div");
  // KUNCINYA DI SINI: Harus ada class 'student-card'
  card.className =
    "student-card group relative overflow-hidden rounded-2xl bg-slate-800";

  card.innerHTML = `
    <img src="${siswa.foto}" alt="${siswa.nama}" class="...">
    <div class="p-4">
      <h3 class="text-white font-bold">${siswa.nama}</h3>
      <p class="text-slate-400 text-xs">${siswa.role}</p>
    </div>
  `;
  document.getElementById("siswa-container").appendChild(card);
});

// --- 6. FUNGSI OVERDRIVE ---
function activateOverdrive() {
  const body = document.body;
  const robotAvatar = document.getElementById("robotAvatar");
  const visualizer = document.getElementById("visualizer");

  body.classList.add("overdrive-active");
  if (visualizer) visualizer.classList.remove("opacity-0");

  robotAvatar.src = "img/terminal/overdrive.jpg";
  robotStatus.innerText = "STATUS: OVERDRIVE - OVERCLOCK";
  robotStatus.className =
    "mt-4 text-red-500 font-mono text-sm border border-red-500 px-3 py-1 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]";

  appendToTerminal("ACCESS GRANTED. INITIALIZING OVERDRIVE MODE...");

  setTimeout(() => {
    body.classList.remove("overdrive-active");
    if (visualizer) visualizer.classList.add("opacity-0");
    robotAvatar.src = "img/terminal/download.jpg";
    robotStatus.innerText = "STATUS: IDLE";
    robotStatus.className =
      "mt-4 text-indigo-400 font-mono text-sm border border-indigo-400 px-3 py-1 rounded-full animate-pulse";
    appendToTerminal("SYSTEM STABILIZED. NORMAL MODE RESTORED.");
  }, 20000);
}

// --- 7. EVENT LISTENER (Disederhanakan) ---
terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const val = terminalInput.value.trim();
    if (val) processCommand(val);
    terminalInput.value = "";
  }
});

const mobileSendBtn = document.getElementById("mobileSendBtn");

// Fungsi pembantu biar gak nulis logic dua kali
function handleCommandExecution() {
  const val = terminalInput.value.trim();
  if (val) {
    processCommand(val);
    terminalInput.value = ""; // Kosongkan input
  }
}

// Event klik untuk tombol mobile
if (mobileSendBtn) {
  mobileSendBtn.addEventListener("click", () => {
    handleCommandExecution();
    terminalInput.focus(); // Tetap fokus ke input setelah kirim
  });
}

// Update juga event listener Enter kamu biar pakai fungsi yang sama
terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleCommandExecution();
  }
});

const counterObserver = new IntersectionObserver(startCounter, {
  threshold: 0.5,
});

counters.forEach((counter) => counterObserver.observe(counter));

document.addEventListener("DOMContentLoaded", () => {
  shuffleQuote();
  type();
  renderSiswa(daftarSiswa);

  // Inisialisasi Album setelah render (beri jeda sedikit agar DOM siap)
  setTimeout(initAlbum, 1000);

  // Observasi counter
  counters.forEach((counter) => counterObserver.observe(counter));
});

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particlesArray = [];

// Sesuaikan ukuran canvas
function setCanvasSize() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}
window.addEventListener("resize", setCanvasSize);
setCanvasSize();

const mouse = { x: null, y: null };

// Update posisi mouse saat berada di dalam section
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;

  // Buat 2 partikel setiap mouse bergerak
  for (let i = 0; i < 2; i++) {
    particlesArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    // Hapus this.color dari sini
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    // Ambil warna real-time dari CSS Variable setiap frame digambar
    const currentColor = getComputedStyle(
      document.getElementById("particle-gap"),
    ).getPropertyValue("--particle-color");

    ctx.fillStyle = `hsla(${currentColor}, 80%, 50%, 0.8)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    // Hapus partikel yang sudah mengecil
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Jalankan render pertama kali
renderSiswa(daftarSiswa);
