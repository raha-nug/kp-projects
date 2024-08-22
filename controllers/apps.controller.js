const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getFormApps = async (req, res) => {
  const { slug } = req.params;
  try {
    if (slug != "desa" && slug != "dinas") {
      return res.status(404).send({
        status: "error",
        message: "Form tidak tersedia",
      });
    }

    res.render("forms/apps", {
      type: slug,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mengambil data",
    });
  }
};

const getApps = async (req, res) => {
  const id = req.query.instansi_id;
  try {

     if (!id) {
       return res.status(404).send({
         status: "error",
         message: "Harap masukan instansi_id",
       });
     }

    const apps = await prisma.usedApps.findMany({
      where: {
        instansi_id: Number(id),
      },
    });

    if (!apps) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    res.status(200).send({
      status: "success",
      data: apps,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mengambil data",
    });
  }
};

const getAppById = async (req, res) => {
  const { id } = req.params;
  try {
    const apps = await prisma.usedApps.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!apps) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    res.status(200).send({
      status: "success",
      data: apps,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mengambil data",
    });
  }
};

const createApp = async (req, res) => {
  const id = req.query.instansi_id;
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!instansi) {
      return res.status(404).send({
        status: "error",
        message: "Instansi id tidak ditemukan",
      });
    }

    const apps = await prisma.usedApps.create({
      data: {
        ...req.body,
        used_since: new Date(req.body.used_since),
        instansi_id: Number(id),
      },
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil disimpan",
      data: apps,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat menyimpan data",
    });
  }
};

const updateApp = async (req, res) => {
  const { id } = req.params;
  try {
    // check aplikasi
    const appExist = await prisma.usedApps.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!appExist) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    const apps = await prisma.usedApps.update({
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
        used_since: new Date(req.body.used_since),
      },
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil diubah",
      data: apps,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mengubah data",
    });
  }
};

const deleteApp = async (req, res) => {
  const { id } = req.params;
  try {
    // check aplikasi
    const appExist = await prisma.usedApps.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!appExist) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    await prisma.usedApps.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat menghapus data",
    });
  }
};

module.exports = {
  getApps,
  getAppById,
  getFormApps,
  createApp,
  updateApp,
  deleteApp,
};
