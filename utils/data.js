const layananIP = [
  {
    name: "Pengajuan Server",
    link: "/ip/pengajuan-server",
  },
  {
    name: "Pengajuan sideka",
    link: "/ip/pengajuan-sideka",
  },
  {
    name: "Pengajuan Dosting",
    link: "/ip/pengajuan-hosting",
  },
  {
    name: "Pembuatan Akun Drive E-Goverment",
    link: "/ip/drive-e-goverment",
  },
  {
    name: "Pembuatan Akun Email @tasikmalayakab.go.id",
    link: "/ip/email-tasikmalayakab",
  },
  {
    name: "Pengajuan Domain",
    link: "/ip/pengajuan-domain",
  },
  {
    name: "Pengajuan Fasilitas Alat Alat Zoom",
    link: "/ip/pengajuan-alat-zoom",
  },
  {
    name: "Jumlah Aplikasi Desa",
    link: "/ip/jumlah-app-desa",
  },
  {
    name: "Jumlah Desa Blank Spot",
    link: "/ip/jumlah-desa-blankspot",
  },
];

const sopCreateEmail = [
  {
    title: "Pembuatan Akun Email @tasikmalayakab.go.id",
    data: [
      "Membuat surat permohonan dan lampiran disposisi.",
      "Surat permohonan pembuatan user ID email @tasikmalayakab.go.id diterima, diperiksa dan disposisikan surat kepada seksi yang relevan (LPSE, Aplikasi, dan Database).",
      "Setelah itu, surat permohonan diperiksa, diteliti, dan disetujui jika memenuhi syarat, diikuti dengan perintah pembuatan user ID berdasarkan permohonan tersebut.",
      "Selanjutnya, user ID email @tasikmalayakab.go.id dibuat dan draft surat persetujuan pembuatan user ID disiapkan.",
      "Draft surat persetujuan tersebut kemudian diperiksa, diteliti, dan disetujui, termasuk melakukan pengecekan email @tasikmalayakab.go.id user ID baru.",
      "Memeriksa, meneliti, dan menyetujui draft surat persetujuan dan pemberitahuan email @tasikmalayakab.go.id.",
      "Kemudian pengarsipan pembuatan email @tasikmalayakab.go.id.",
    ],
  },
];

const sopCreateEmailEGoverment = [
  {
    title: "Standar Operasi Pelayanan pembuatan akun drive email E-Goverment",
    data: [
      "Pegawai (ASN) membuat surat permohonan dan lampiran disposisi",
      "Kemudian bidang IP menerima, memeriksa surat permohonan dan lampiran disposisi",
      "Setelah itu, surat permohonan disetujui jika memenuhi syarat, diikuti dengan mengeluarkan surat disposisi",
      "Kemudian memeriksa surat persetujuan dan menerima perintah dan membuat user id yang sesuai dengan pemohon",
      "Pemohon akan menerima user id dan password",
      "Kemudian pengarsipan surat persetujuan",
    ],
  },
];

const sopMigrateToSidekaNG = [
  {
    title: "Standar operasi pelayanan pengajuan Sideka ke SidekaNG",
    data: [
      "Desa membuat surat permohonan migrasi Sideka ke SidekaNG (Nama Domain Sideka)",
      "Kemudian mengirimkan surat permohonan tersebut ke bagian IP",
      "Bidang IP menerima surat permohonan",
      "Kemudian mengidentifikasi/mengkaji data",
      "Mengevaluasi struktur data Sideka dan SidekaNG jika tidak sesuai, maka desa harus membuat surat permohonan pembuatan baru Sideka ke SidekaNG dan mengirimkan Kembali surat permohonan ke bagian IP ",
      "Jika struktur data Sideka dan SidekaNG sudah sesuai, maka akan ditindaklanjuti",
      "Kemudian memigrasikan Sideka ke SidekaNG",
      "Setelah itu mendapatkan surat balasan berisi domain aplikasi SidekaNG, portal admin, admin desa, username, dan password",
      "Melakukan pengarsipan",
      "Kemudian mengirimkan surat balasan ke Desa",
      "Desa akan menerima surat balasan berisi berisi domain aplikasi SidekaNG, portal admin, admin desa, username,dan password",
    ],
  },
];

const sopCreateHosting = [
  {
    title: "Standar operasi pelayanan pembuatan Hosting",
    data: [
      "Pemohon membuat surat permohonan, surat disposisi kepala dinas dan menyantumkan kebutuhan hosting (processor, ram, storage, OS)",
      "Kemudian bidang IP menerima, mengkaji surat permohonan",
      "Setelah itu, surat permohonan disetujui jika disetujui, diikuti dengan menandatangani surat permohonan",
      "Jika tidak disetujui harus membuat surat permohonan, surat disposisi kepala dinas dan menyantumkan kebutuhan hosting (processor, ram, storage, OS) baru dan mengirimkan kembali ke bidang IP",
      "Kemudian pembuatan hosting",
      "Pemohon akan menerima username dan password",
      "Kemudian pengarsipan  ",
    ],
  },
];

const sopCreateDomain = [
  {
    title: "Standar operasi pelayanan pembuatan domain",
    data: [
      "Pemohon membuat surat permohonan, disposisi Kepala Dinas",
      "Menerima surat permohonan domain",
      "Mengkaji surat permohonan",
      "Setelah itu, surat permohonan disetujui jika memenuhi syarat, diikuti dengan menandatangani surat persetujuan permohonan.",
      "Kemudian pembuatan domain",
      "Selanjutnya, pemohon menerima alamat domain, username, dan password Cpanel",
      "Kemudian pengarsipan  ",
    ],
  },
];
const sopCreateServer = [
  {
    title: "Standar operasi pelayanan pengajuan server",
    data: [
      "Pemohon membuat surat permohonan, disposisi Kepala DinasPemohon membuat surat permohonan",
      "Menerima surat permohonan ",
      "Memeriksa surat permohonan",
      "Mengkaji data pengambilan server, jika disetujui diikuti dengan penandatanganan berita acara.",
      "Kemudian menyerahkan berita acara",
      "Selanjutnya, pemohon menerima berita acara ",
      "Kemudian melakukan pengambilan server dilakukan.",
    ],
  },
];

const bidang = [
  {
    nama: "Sekretariat",
    icon: "bi bi-file-person-fill",
    link: "/sekretariat",
  },
  {
    nama: "Bidang Lalu Lintas",
    icon: "bi bi-stoplights",
    link: "/lalulintas",
  },
  {
    nama: "Bidang Angkutan",
    icon: "bi bi-bus-front",
    link: "/angkutan",
  },
  {
    nama: "Bidang Sarana dan Prasarana",
    icon: "bi bi-tools",
    link: "/sapras",
  },
  {
    nama: "Bidang Informasi dan Komunikasi Publik",
    icon: "bi bi-camera-reels",
    link: "/ikp",
  },
  {
    nama: "Bidang Informatika dan Persandian",
    icon: "bi bi-database-lock",
    link: "/ip",
  },
  {
    nama: "Unit Pelaksana Teknis Daerah",
    icon: "bi bi-buildings",
    link: "/uptd",
  },
];

const dataPegawai = [
  {
    name: "Kurnia Trisna Somantri, S.T, M.Kom.",
    postition: "",
    nip: "197604072010011013",
    type: "PNS",
  },
  {
    name: "Firman Saleh Nugraha Suhara, S.T.",
    postition: "",
    nip: "",
    type: "PNS",
  },
  {
    name: "Ai Siti Nurhasanah, S.T, M.M.",
    postition: "",
    nip: "19770515200642005",
    type: "PNS",
  },
  {
    name: "Ganjar Nugraha, A.Md",
    postition: "",
    nip: "1986070122211001",
    type: "NON PNS",
  },
  {
    name: "Agus Sandiyana, S.IP",
    postition: "",
    nip: "197608222007011005",
    type: "PNS",
  },
  {
    name: "Honest Panuntun",
    postition: "",
    nip: "198311092006041007",
    type: "PNS",
  },
  {
    name: "Eka Trimurwa Dyana, A.Md",
    postition: "",
    nip: "198508162024211005",
    type: "NON PNS",
  },
  {
    name: "Soni Maulana M, S.Kom",
    postition: "",
    nip: "",
    type: "NON PNS",
  },
  {
    name: "Mulky Hary Subawa, S.Kom",
    postition: "",
    nip: "",
    type: "NON PNS",
  },
];

module.exports = {
  dataPegawai,
  sopCreateEmail,
  sopCreateEmailEGoverment,
  sopCreateDomain,
  sopCreateHosting,
  sopMigrateToSidekaNG,
  sopCreateServer,
  bidang,
  layananIP,
};
