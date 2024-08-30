const { z } = require("zod");
const fs = require("fs");

const desaBlankspotSchema = z.object({
  name: z
    .string()
    .min(1, "Nama harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  email: z.string().email("Format email tidak valid"),
  phone_number: z
    .string()
    .min(1, "Nomor Hp harus diisi")
    .regex(/^[0-9 ]*$/, {
      message: "Hanya boleh mengandung angka dan spasi.",
    }),
  kecamatan: z
    .string()
    .min(1, "Kecamatan harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  kelurahan: z
    .string()
    .min(1, "Kelurahan harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  location_name: z
    .string()
    .min(1, "Nama lokasi harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  location_address: z.string().min(1, "Alamat lokasi harus diisi"),
  latitude: z.string().min(1, "Latitude harus diisi"),
  longitude: z.string().min(1, "Longitude harus diisi"),
  location_code: z.string().min(1, "Kode lokasi harus diisi"),
  operational: z.string().min(1, "Jam Operasional harus diisi"),
  electric_resources: z
    .string()
    .min(1, "Sumber listrik harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  electric_capacity: z
    .string()
    .min(1, "Kapasitas harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  id_pelanggan: z
    .string()
    .min(1, "ID Pelanggan harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  signal_available: z
    .string()
    .min(1, "Kesediaan signal harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  operator: z
    .string()
    .min(1, "Operator harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  signal_power: z
    .string()
    .min(1, "Kekuatan signal harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  signal_needed: z
    .string()
    .min(1, "Signal yang dibutuhkan harus diisi")
    .regex(/^[a-zA-Z0-9 ]*$/, {
      message: "Hanya boleh mengandung huruf, angka, dan spasi.",
    }),
  sector_category: z
    .string()
    .min(1, "Kategori sektor harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  priority: z
    .string()
    .min(1, "Prioritas harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
});

const usedAppsSchema = z.object({
  app_name: z
    .string()
    .min(1, "Nama aplikasi harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  status: z
    .string()
    .min(1, "Status harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  used_since: z.string().date({ required_error: "Tanggal harus diisi" }),
  app_dev: z
    .string()
    .min(1, "Pengembang harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  app_url: z.string().url("Format URL tidak valid"),
});

const registerScehma = z.object({
  name: z
    .string()
    .min(1, "Nama harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(1, "Password harus diisi"),
});
const loginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(1, "Password harus diisi"),
});

const instansiAppSchema = z.object({
  name: z
    .string()
    .min(1, "Nama desa harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  kecamatan: z
    .string()
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    })
    .optional(),
  type: z
    .string()
    .min(1, "Type harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  apps: z.array(usedAppsSchema).optional(), //array dari `UsedApps` atau kosong
  admin_name: z
    .string()
    .min(1, "Nama admin harus diisi")
    .regex(/^[a-zA-Z ]*$/, {
      message: "Hanya boleh mengandung huruf dan spasi.",
    }),
  admin_phone_number: z
    .string()
    .min(10, "Nomor HP admin harus minimal 10 karakter")
    .regex(/^\d+$/, "Nomor HP admin harus berupa angka"),
});

//validate register
const validateRegister = (req, res, next) => {
  try {
    registerScehma.parse(req.body);
    next(); // Lanjutkan jika validasi berhasil
  } catch (e) {
    return res.status(400).send({
      status: "error",
      message: e.errors.map((err) => err.message),
    });
  }
};
//validate login
const validateLogin = (req, res, next) => {
  try {
    loginSchema.parse(req.body);
    next(); // Lanjutkan jika validasi berhasil
  } catch (e) {
    return res.status(400).send({
      status: "error",
      message: e.errors.map((err) => err.message),
    });
  }
};
//validate desa app
const valiadateInstansiApp = (req, res, next) => {
  try {
    instansiAppSchema.parse(req.body);
    next(); // Lanjutkan jika validasi berhasil
  } catch (e) {
    return res.status(400).send({
      status: "error",
      message: e.errors.map((err) => err.message),
    });
  }
};

//validate apps
const validateUsedApps = (req, res, next) => {
  try {
    usedAppsSchema.parse(req.body);
    next(); // Lanjutkan jika validasi berhasil
  } catch (e) {
    return res.status(400).send({
      status: "error",
      message: e.errors.map((err) => err.message),
    });
  }
};

// Middleware untuk memeriksa keberadaan file
const checkFilePresence = (req, res, next) => {
  if (!req.file) {
    return res.status(400).send({
      status: "error",
      message: "File wajib diisi",
    });
  }
  next();
};

// Middleware untuk validasi data
const validateDesaBlankspot = (req, res, next) => {
  try {
    desaBlankspotSchema.parse(req.body);
    next();
  } catch (e) {
    // Hapus file jika validasi gagal
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(400).send({
      status: "error",
      message: e.errors.map((err) => err.message),
    });
  }
};

module.exports = {
  validateRegister,
  validateLogin,
  checkFilePresence,
  valiadateInstansiApp,
  validateDesaBlankspot,
  validateUsedApps,
};
