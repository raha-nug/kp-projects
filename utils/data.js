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

const sopMaintainanceInfrastructor = [
  {
    title: "Standar operasional pelayanan pengajuan pemasangan infrastuktur",
    data: [
      "Membuat surat permohonan, disposisi Bupati/Sekda dan data inventaris computer dan jaringan.",
      "Menerima surat permohonan Pemeliharaan infrastruktur Telematika dari OPD.",
      "Memeriksa/meneliti surat permohonan beserta lampiran (data inventaris) dan membuat konsep surat persetujuan permohonan.",
      " Memeriksa/meneliti/menyetujui surat permohonan beserta lampiran (data inventaris) dan konsep persetujuan permohonan.",
      " Selanjutnya, memeriksa/meneliti/menyetujui surat permohonan beserta lampiran (data inventaris) dan mendandatangani surat permohonan.",
      "Pemeliharaan infrastruktur.",
      "Kemudian pengarsipan.",
    ],
  },
];

module.exports = {
  sopCreateEmail,
  sopCreateEmailEGoverment,
  sopCreateDomain,
  sopCreateHosting,
  sopMigrateToSidekaNG,
  sopCreateServer,
  sopMaintainanceInfrastructor,
};
