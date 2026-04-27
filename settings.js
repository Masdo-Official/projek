// ================================================================
//  settings.js — TKJ XI-9 | Data Global & Konfigurasi
//  Edit file ini untuk mengubah data tanpa menyentuh file lain.
//  Versi 2.0 · Renovasi 2026
// ================================================================
'use strict';

const G = {

  // ── INFO KELAS ──────────────────────────────────────────────
  namaKelas   : "XI-9",
  jurusan     : "TKJ",
  namaSekolah : "SMK Negeri 1",
  tahunAjaran : "2024 / 2025",
  motto       : "Solid, Kreatif, dan Berdedikasi Tanpa Batas",
  deskripsi   : "Kelas Teknik Komputer dan Jaringan yang penuh semangat belajar, inovasi tanpa henti, dan solidaritas yang tak tergoyahkan dalam menguasai dunia teknologi digital.",
  sloganHero  : "Komunitas pejuang digital yang siap menguasai jaringan, keamanan siber, dan teknologi masa depan dengan semangat, solidaritas, dan kompetensi nyata.",
  ogImage     : "https://picsum.photos/seed/tkj-xi9-og/1200/630",
  baseUrl     : "./",

  // ── COUNTDOWN ───────────────────────────────────────────────
  // Target: Ujian Akhir Semester Genap 2025/2026 (otomatis "lewat" → tampil pesan)
  countdown: {
    label  : "Ujian Akhir Semester",
    target : "2026-06-10T08:00:00",
  },

  // ── SOSIAL MEDIA ────────────────────────────────────────────
  sosmed: {
    instagram : "https://instagram.com/tkj.xi9.smkn1",
    youtube   : "https://youtube.com/@tkjxi9smkn1",
    tiktok    : "https://www.tiktok.com/@tkjxi9smkn1",
  },

  // ── STATISTIK ───────────────────────────────────────────────
  stats: [
    { icon: "fa-users",       angka: 20,  suffix: "",  label: "Anggota"          },
    { icon: "fa-trophy",      angka: 15,  suffix: "",  label: "Prestasi"         },
    { icon: "fa-calendar",    angka: 2,   suffix: "",  label: "Tahun Bersama"    },
    { icon: "fa-star",        angka: 100, suffix: "%", label: "Semangat Belajar" },
  ],

  // ── PRESTASI ────────────────────────────────────────────────
  prestasi: [
    { judul: "Juara 1 LKS Jaringan Komputer",    tahun: "2024", tingkat: "Kota"     },
    { judul: "Juara 2 Olimpiade TIK Pelajar",     tahun: "2024", tingkat: "Provinsi" },
    { judul: "Finalis Kompetisi Web Design",       tahun: "2024", tingkat: "Nasional" },
    { judul: "Juara 1 Turnamen e-Sport Sekolah",  tahun: "2024", tingkat: "Sekolah"  },
    { judul: "Sertifikasi Mikrotik MTCNA (3 Siswa)", tahun: "2023", tingkat: "Nasional" },
  ],

  // ── VISI & MISI ─────────────────────────────────────────────
  visi: "Menjadi kelas unggulan yang melahirkan generasi teknisi handal, kreatif, dan berintegritas tinggi dalam menghadapi era transformasi digital dan Industri 4.0.",
  misi: [
    "Meningkatkan kompetensi teknis di bidang jaringan komputer, keamanan siber, dan pengembangan perangkat lunak secara berkelanjutan",
    "Membangun karakter siswa yang disiplin, jujur, bertanggung jawab, dan mampu bekerja dalam tim secara profesional",
    "Mendorong budaya inovasi, kreativitas, dan problem solving dalam setiap kegiatan akademik maupun non-akademik",
    "Memperkuat solidaritas, rasa kekeluargaan, dan semangat gotong royong antar seluruh anggota kelas",
    "Mempersiapkan diri secara optimal untuk dunia kerja, wirausaha mandiri, dan jenjang pendidikan tinggi di bidang teknologi",
  ],

  // ── WALI KELAS ──────────────────────────────────────────────
  waliKelas: {
    nama    : "Bpk. Ahmad Fauzi, S.Kom",
    jabatan : "Wali Kelas XI-9 TKJ",
    foto    : "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33",
  },

  // ── STRUKTUR ORGANISASI ─────────────────────────────────────
  // Urutan: 0-1=Ketua+Wakil, 2-3=Sekretaris I/II, 4-5=Bendahara I/II, 6-7=Keamanan I/II
  strukturOrg: [
    { nama: "Rizky Aditya Pratama",   jabatan: "Ketua Kelas",   foto: "https://ui-avatars.com/api/?name=Rizky+Aditya&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Nanda Putri Wulandari",  jabatan: "Wakil Ketua",   foto: "https://ui-avatars.com/api/?name=Nanda+Putri&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Gilang Ramadhan",        jabatan: "Sekretaris I",  foto: "https://ui-avatars.com/api/?name=Gilang+Ramadhan&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Sari Dewi Anggraini",    jabatan: "Sekretaris II", foto: "https://ui-avatars.com/api/?name=Sari+Dewi&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Bintang Arief Nugroho",  jabatan: "Bendahara I",   foto: "https://ui-avatars.com/api/?name=Bintang+Arief&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Kartika Ayu Lestari",    jabatan: "Bendahara II",  foto: "https://ui-avatars.com/api/?name=Kartika+Ayu&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Dimas Eka Saputra",      jabatan: "Keamanan I",    foto: "https://ui-avatars.com/api/?name=Dimas+Eka&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33" },
    { nama: "Reza Firmansyah",        jabatan: "Keamanan II",   foto: "https://ui-avatars.com/api/?name=Reza+Firmansyah&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33" },
  ],

  // ── DATA ANGGOTA (20 siswa) ─────────────────────────────────
  namaSiswa: [
    { nama: "Ahmad Rizki Pratama",    nis: "2401001", foto: "https://ui-avatars.com/api/?name=Ahmad+Rizki&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Ketua kelompok 1, antusias pada jaringan", social: { instagram: "https://instagram.com/ahmadrizki" } },
    { nama: "Bintang Arief Nugroho",  nis: "2401002", foto: "https://ui-avatars.com/api/?name=Bintang+Arief&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Bertanggung jawab pada inventaris", social: { instagram: "https://instagram.com/bingtarief" } },
    { nama: "Citra Dewi Lestari",     nis: "2401003", foto: "https://ui-avatars.com/api/?name=Citra+Dewi&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33", desc: "Anggota aktif divisi dokumentasi", social: { instagram: "https://instagram.com/citradewi" } },
    { nama: "Dimas Eka Saputra",      nis: "2401004", foto: "https://ui-avatars.com/api/?name=Dimas+Eka&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Spesialis hardware & maintenance", social: { instagram: "https://instagram.com/dimaseka" } },
    { nama: "Eka Wahyu Firmansyah",   nis: "2401005", foto: "https://ui-avatars.com/api/?name=Eka+Wahyu&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Ahli troubleshooting jaringan", social: { instagram: "https://instagram.com/ekawahyuf" } },
    { nama: "Fajar Sidiq Maulana",    nis: "2401006", foto: "https://ui-avatars.com/api/?name=Fajar+Sidiq&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33", desc: "Pengembang web dan UI", social: { instagram: "https://instagram.com/fajarsidiq" } },
    { nama: "Gilang Ramadhan",        nis: "2401007", foto: "https://ui-avatars.com/api/?name=Gilang+Ramadhan&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Koordinator praktikum lab", social: { instagram: "https://instagram.com/gilangramadhan" } },
    { nama: "Hana Aprilia Safitri",   nis: "2401008", foto: "https://ui-avatars.com/api/?name=Hana+Aprilia&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Desainer grafis kelas", social: { instagram: "https://instagram.com/hanaaprilia" } },
    { nama: "Ilham Darmawan",         nis: "2401009", foto: "https://ui-avatars.com/api/?name=Ilham+Darmawan&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33", desc: "Fokus pada keamanan siber", social: { instagram: "https://instagram.com/ilhamd" } },
    { nama: "Kartika Ayu Lestari",    nis: "2401010", foto: "https://ui-avatars.com/api/?name=Kartika+Ayu&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Manajer konten dan komunikasi", social: { instagram: "https://instagram.com/kartikayul" } },
    { nama: "Lutfi Hakim Santoso",    nis: "2401011", foto: "https://ui-avatars.com/api/?name=Lutfi+Hakim&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Teknisi jaringan lapangan", social: { instagram: "https://instagram.com/lutfihakim" } },
    { nama: "Mega Wati Rahayu",       nis: "2401012", foto: "https://ui-avatars.com/api/?name=Mega+Wati&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33", desc: "Pengorganisir event kelas", social: { instagram: "https://instagram.com/megawati" } },
    { nama: "Nanda Putri Wulandari",  nis: "2401013", foto: "https://ui-avatars.com/api/?name=Nanda+Putri&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Pengurus dokumentasi & arsip", social: { instagram: "https://instagram.com/nandaputri" } },
    { nama: "Oki Setiawan Putra",     nis: "2401014", foto: "https://ui-avatars.com/api/?name=Oki+Setiawan&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Asisten lab jaringan", social: { instagram: "https://instagram.com/okisetiawan" } },
    { nama: "Putri Ayu Rahmawati",    nis: "2401015", foto: "https://ui-avatars.com/api/?name=Putri+Ayu&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33", desc: "Anggota aktif komunitas coding", social: { instagram: "https://instagram.com/putriayu" } },
    { nama: "Reza Firmansyah",        nis: "2401016", foto: "https://ui-avatars.com/api/?name=Reza+Firmansyah&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Spesialis troubleshooting perangkat", social: { instagram: "https://instagram.com/rezaf" } },
    { nama: "Rizky Aditya Pratama",   nis: "2401017", foto: "https://ui-avatars.com/api/?name=Rizky+Aditya&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Ketua OSIS (wakil), organisasi kelas", social: { instagram: "https://instagram.com/rizkyaditya" } },
    { nama: "Sari Dewi Anggraini",    nis: "2401018", foto: "https://ui-avatars.com/api/?name=Sari+Dewi&background=b91c1c&color=fff&size=200&bold=true&font-size=0.33", desc: "Koordinator humas kelas", social: { instagram: "https://instagram.com/saridewi" } },
    { nama: "Taufik Hidayat",         nis: "2401019", foto: "https://ui-avatars.com/api/?name=Taufik+Hidayat&background=7f1d1d&color=fff&size=200&bold=true&font-size=0.33", desc: "Pengembang skrip otomasi lab", social: { instagram: "https://instagram.com/taufikh" } },
    { nama: "Vina Amelia Putri",      nis: "2401020", foto: "https://ui-avatars.com/api/?name=Vina+Amelia&background=991b1b&color=fff&size=200&bold=true&font-size=0.33", desc: "Desainer UI/UX muda", social: { instagram: "https://instagram.com/vinaamelia" } },
  ],

  // ── SKILLS / KOMPETENSI ─────────────────────────────────────
  skills: [
    { nama: "Jaringan Komputer",      level: 90, icon: "fa-network-wired",  desc: "LAN, WAN, routing, switching, VLAN, serta konfigurasi jaringan enterprise tingkat lanjut." },
    { nama: "Web Development",        level: 80, icon: "fa-code",           desc: "HTML5, CSS3, JavaScript ES6+, responsive design, dan dasar-dasar framework modern." },
    { nama: "Hardware & Maintenance", level: 88, icon: "fa-microchip",      desc: "Perakitan, troubleshooting, overclocking, dan perawatan preventif perangkat keras komputer." },
    { nama: "Keamanan Siber",         level: 75, icon: "fa-shield-halved",  desc: "Firewall, enkripsi, penetration testing dasar, hardening server, dan keamanan jaringan." },
    { nama: "Sistem Operasi Linux",   level: 78, icon: "fa-terminal",       desc: "Administrasi server Ubuntu/CentOS, shell scripting bash, dan manajemen layanan sistem." },
    { nama: "Pemrograman & Algoritma",level: 82, icon: "fa-laptop-code",    desc: "Python, logika algoritma, struktur data, dan pengenalan pemrograman berorientasi objek." },
  ],
  
  galeri: [
    { src: "https://picsum.photos/seed/tkj001/400/400", caption: "Foto Kelas Bersama",   label: "FOTO KELAS"   },
    { src: "https://picsum.photos/seed/tkj002/400/400", caption: "Kegiatan Praktikum",   label: "PRAKTIKUM"    },
    { src: "https://picsum.photos/seed/tkj003/400/400", caption: "Lab Jaringan",          label: "LAB JARINGAN" },
    { src: "https://picsum.photos/seed/tkj004/400/400", caption: "Kompetisi LKS",         label: "KOMPETISI"    },
    { src: "https://picsum.photos/seed/tkj005/400/400", caption: "Study Tour SMK",        label: "STUDY TOUR"   },
    { src: "https://picsum.photos/seed/tkj006/400/400", caption: "Ekskul Robotika",       label: "EKSKUL"       },
    { src: "https://picsum.photos/seed/tkj007/400/400", caption: "Upacara Bendera",       label: "UPACARA"      },
    { src: "https://picsum.photos/seed/tkj008/400/400", caption: "Momen Hari Guru",       label: "HARI GURU"    },
    { src: "https://picsum.photos/seed/tkj009/400/400", caption: "Olahraga Bersama",      label: "OLAHRAGA"     },
    { src: "https://picsum.photos/seed/tkj010/400/400", caption: "Sertifikasi Mikrotik",  label: "SERTIFIKASI"  },
    { src: "https://picsum.photos/seed/tkj011/400/400", caption: "PKL di Industri",       label: "PKL"          },
    { src: "https://picsum.photos/seed/tkj012/400/400", caption: "Wisuda & Perpisahan",   label: "WISUDA"       },
    { src: "https://picsum.photos/seed/tkj013/400/400", caption: "Belajar Konfigurasi Router", label: "PRAKTIKUM" },
    { src: "https://picsum.photos/seed/tkj014/400/400", caption: "Workshop Keamanan Siber", label: "KEAMANAN" },
    { src: "https://picsum.photos/seed/tkj015/400/400", caption: "Proyek Akhir Tim", label: "PROYEK" },
    { src: "https://picsum.photos/seed/tkj016/400/400", caption: "Kegiatan Ekstrakurikuler", label: "EKSKUL" },
    { src: "https://picsum.photos/seed/tkj017/400/400", caption: "Kunjungan Industri", label: "KUNJUNGAN" },
    { src: "https://picsum.photos/seed/tkj018/400/400", caption: "Uji Kompetensi", label: "UJI" },
    { src: "https://picsum.photos/seed/tkj019/400/400", caption: "Foto Tim Proyek", label: "PROYEK" },
    { src: "https://picsum.photos/seed/tkj020/400/400", caption: "Kegiatan Sosial Sekolah", label: "SOSIAL" },
  ],

  // ── DATA TKJ (Halaman tkj.html) ────────────────────────────
  tkj: {
    deskripsi: "Teknik Komputer dan Jaringan (TKJ) adalah program keahlian yang mempelajari instalasi, konfigurasi, pemeliharaan sistem komputer, serta perancangan dan pengelolaan jaringan komunikasi data dari skala lokal hingga enterprise.",
    mapel: [
      { nama: "Dasar Jaringan Komputer",  icon: "fa-network-wired" },
      { nama: "Administrasi Server",       icon: "fa-server"        },
      { nama: "Keamanan Jaringan",         icon: "fa-shield-halved" },
      { nama: "Pemrograman Web",           icon: "fa-code"          },
      { nama: "Sistem Operasi Jaringan",   icon: "fa-desktop"       },
      { nama: "Perakitan Komputer",        icon: "fa-microchip"     },
      { nama: "Komunikasi Data & Fiber",   icon: "fa-wifi"          },
      { nama: "Cloud Computing Dasar",     icon: "fa-cloud"         },
    ],
    karir: [
      { jabatan: "Network Engineer",        icon: "fa-network-wired", desc: "Merancang, mengimplementasikan, dan mengelola infrastruktur jaringan perusahaan skala enterprise." },
      { jabatan: "System Administrator",    icon: "fa-server",        desc: "Mengelola, memelihara, dan mengoptimalkan server serta sistem operasi dalam lingkungan produksi." },
      { jabatan: "Web Developer",           icon: "fa-code",          desc: "Membangun aplikasi dan website yang fungsional, responsif, dan berperforma tinggi." },
      { jabatan: "IT Support Specialist",   icon: "fa-headset",       desc: "Memberikan dukungan teknis komprehensif kepada pengguna, hardware, software, dan sistem." },
      { jabatan: "Cyber Security Analyst",  icon: "fa-shield-halved", desc: "Menganalisis, mendeteksi, dan merespons ancaman keamanan siber dalam ekosistem digital." },
      { jabatan: "Cloud Engineer",          icon: "fa-cloud",         desc: "Mengelola infrastruktur cloud (AWS/GCP/Azure) dan merancang solusi berbasis cloud." },
    ],
    kurikulum: [
      { fase: "Kelas X",   fokus: "Fondasi TKJ: perakitan hardware, instalasi OS, konsep jaringan dasar, dan pengantar pemrograman." },
      { fase: "Kelas XI",  fokus: "Pendalaman: administrasi jaringan enterprise, server Linux, keamanan siber, dan pengembangan web." },
      { fase: "Kelas XII", fokus: "Aplikasi: proyek akhir, PKL (Praktik Kerja Lapangan), sertifikasi kompetensi, dan persiapan karir." },
    ],
  },

};
