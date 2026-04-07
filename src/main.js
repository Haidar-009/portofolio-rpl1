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
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Aisna.jpg",
  },
  {
    nama: "Atik",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Atik.jpg",
  },
  {
    nama: "Atika sari",
    role: "UI/UX",
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
    role: "Assistant Treasurer",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/cracas.jpg",
  },
  {
    nama: "Danar",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Danar.jpg",
  },
  {
    nama: "Deyah",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Deyah.jpg",
  },
  {
    nama: "Dzaskia",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Dzaskia.jpg",
  },
  {
    nama: "Fika",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Fika.jpg",
  },
  {
    nama: "Grasela",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Grasela.jpg",
  },
  {
    nama: "Haidar",
    role: "FULL Stack developer",
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
    role: "UI/UX",
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
    role: "Class VP",
    bio: "hiduplah dengan karaktermu sendiri, jangan merubah dirimu hanya untuk di sukai.",
    ig: "https://www.instagram.com/zynive_?igsh=MW1kaTdjbDVuY3RvaA==",
    github: "https://www.tiktok.com/@leziozio4?_r=1&_t=ZS-95IsY7VkUQj",
    foto: "/img/Lezio.jpg",
  },
  {
    nama: "Lila",
    role: "Discipline Coordinator",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Lila.jpg",
  },
  {
    nama: "Maulidiah",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Maulidiah.jpg",
  },
  {
    nama: "Maulin",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Maulin.jpg",
  },
  {
    nama: "M.Hafidz",
    role: "UI/UX",
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
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Nyimas.jpg",
  },
  {
    nama: "Panca",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Panca.jpg",
  },
  {
    nama: "Rehan",
    role: "UI/UX",
    bio: "Desain adalah passion.",
    ig: "#",
    github: "#",
    foto: "/img/Rehan.jpg",
  },
  {
    nama: "Sabila",
    role: "Secretary",
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
    role: "UI/UX",
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
    role: "UI/UX",
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
    mobileMenu.classList.toggle("hidden");
    // Opsional: ganti icon hamburger jadi silang (X)
    const isHidden = mobileMenu.classList.contains("hidden");
    menuBtn.innerHTML = isHidden
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  });

  // Otomatis tutup menu kalau link diklik (biar gak nutupin layar)
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
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
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target + (target > 1 ? "+" : ""); // Tambah tanda + jika lebih dari 1
        }
      };
      updateCount();
      observer.unobserve(counter); // Berhenti mengamati setelah animasi selesai
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
  "Solidaritas RPL 1 itu kayak Git: Sekali di-commit, gak bakal hilang.",
  "Kita bukan cuma sekadar teman sekelas, kita adalah satu repositori.",
  "RPL 1: Datang sebagai user, pulang sebagai creator.",
  "Kompak itu kuncinya, kalau satu error, semua ikut debugging.",
  "Di sini kita belajar, bukan cuma ngetik tapi juga membangun masa depan.",
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

const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

if (terminalInput) {
  terminalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const command = this.value.toLowerCase().trim();
      let response = "";

      if (command === "help") {
        response =
          "Available commands: help, class-info, member-count, creator, clear";
      } else if (command === "class-info") {
        response = "XI RPL 1: Kelas pejuang koding, solid, dan penuh kejutan.";
      } else if (command === "member-count") {
        response = "Total member: 32 Students & 1 Mentor.";
      } else if (command === "creator") {
        response = "Website ini dibangun  oleh Haidar.";
      } else if (command === "sudo su") {
        response = "Nice try, tapi di sini Haidar yang pegang root! 😎";
      } else if (command === "ibu-fitri") {
        response = "Wali Kelas terbaik yang selalu support XI RPL 1! ✨";
      } else if (command === "rpl1") {
        response =
          '<span class="text-yellow-400">SOLID! SOLID! SOLID! 🚀</span>';
      } else if (command === "clear") {
        terminalOutput.innerHTML = "";
        this.value = "";
        return;
      } else if (command === "") {
        response = "";
      } else {
        response = `Command not found: ${command}. Type 'help' for assistance.`;
      }

      // Tampilkan output
      const line = document.createElement("div");
      line.innerHTML = `<span class="text-green-400">PS D:\\RPL1></span> <span class="text-white">${command}</span><br><span class="text-slate-300">${response}</span>`;
      line.className = "mb-2";
      terminalOutput.appendChild(line);

      // Auto scroll ke bawah
      const terminalBody = document.getElementById("terminal-body");
      terminalBody.scrollTop = terminalBody.scrollHeight;

      this.value = "";
    }
  });
}

document.getElementById("terminal-body").addEventListener("click", () => {
  document.getElementById("terminal-input").focus();
});

const counterObserver = new IntersectionObserver(startCounter, {
  threshold: 0.5,
});

counters.forEach((counter) => counterObserver.observe(counter));

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", type);

// Jalankan init setelah halaman load
setTimeout(initAlbum, 1000);

// Jalankan render pertama kali
renderSiswa(daftarSiswa);
