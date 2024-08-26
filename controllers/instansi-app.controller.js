const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getInstansiByParams = async (req, res) => {
  const { slug } = req.params;
  try {
    const instansi = await prisma.instansi.findMany({
      where: {
        type: slug,
      },
      include: {
        _count: {
          select: {
            apps: true,
          },
        },
        apps: true,
      },
    });

    // if (instansi.length === 0) {
    //   return res.status(404).send({
    //     status: "error",
    //     message: "Data tidak diemukan",
    //   });
    // }

    const totalInstansi = await prisma.instansi.count({
      where: {
        type: slug,
      },
    });

    const mappedInstansi = instansi.map((instansi) => ({
      instansi_id: instansi.id,
      type: instansi.type,
      instansi_name: instansi.name,
      kecamatan: instansi.kecamatan,
      admin_name: instansi.admin_name,
      admin_phone_number: instansi.admin_phone_number,
      total_apps: instansi._count.apps,
      apps: instansi.apps,
    }));

    // res.status(200).send({
    //   status: "success",
    //   total_instansi: totalInstansi,
    //   data: mappedInstansi,
    // });

    res.render("dashboard", {
      status: "success",
      type: slug,
      total_instansi: totalInstansi,
      data: mappedInstansi,
      name: req.user.name,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan ketika mengambil data",
    });
  }
};

const getFormInstansi = async (req, res) => {
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

const getFormEditInstansi = async (req, res) => {
  const { id } = req.params;
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: id,
      },
      include: {
        apps: true,
      },
    });

    if (!instansi) {
      return res.status(404).send({
        status: "error",
        message: "Form edit tidak tersedia",
      });
    }

    res.render("forms/edit-apps", {
      type: instansi.type,
      prev_val: instansi,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mengambil data",
    });
  }
};

const getInstansi = async (req, res) => {
  try {
    const instansi = await prisma.instansi.findMany({
      include: {
        _count: {
          select: {
            apps: true,
          },
        },
        apps: true,
      },
    });

    const totalInstansi = await prisma.instansi.count();

    const mappedInstansi = instansi.map((instansi) => ({
      instansi_id: instansi.id,
      type: instansi.type,
      instansi_name: instansi.name,
      kecamatan: instansi.kecamatan,
      admin_name: instansi.admin_name,
      admin_phone_number: instansi.admin_phone_number,
      total_apps: instansi._count.apps,
      apps: instansi.apps,
    }));

    res.status(200).send({
      status: "success",
      total_instansi: totalInstansi,
      data: mappedInstansi,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan ketika mengambil data",
    });
  }
};

const createIntansi = async (req, res) => {
  try {
    const instansi = await prisma.instansi.create({
      data: {
        name: req.body.name,
        type: req.body.type,
        kecamatan: req.body.kecamatan,
        admin_name: req.body.admin_name,
        admin_phone_number: req.body.admin_phone_number,
        apps: {
          create: req.body.apps.map((app) => ({
            app_name: app.app_name,
            status: app.status,
            used_since: new Date(app.used_since),
            app_dev: app.app_dev,
            app_url: app.app_url,
          })),
        },
      },
      include: {
        apps: true,
      },
    });

    res.status(201).send({
      status: "success",
      message: "Data berhasil disimpan",
      data: instansi,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan ketika menyimpan data",
    });
  }
};

const updateInstansiApp = async (req, res) => {
  const { id } = req.params;
  const { apps, ...instansiData } = req.body;
  try {
    if (!id) {
      return res.status(404).send({
        status: "error",
        message: "Parameter id tidak dimasukan",
      });
    }
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: id,
      },
    });

    if (!instansi) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    const updatedInstansi = await prisma.instansi.update({
      where: { id: id },
      data: {
        ...instansiData,
        apps: {
          deleteMany: {}, // This will delete all existing apps
          create: apps.map((app) => ({
            app_name: app.app_name,
            used_since: new Date(app.used_since),
            status: app.status,
            app_dev: app.app_dev,
            app_url: app.app_url,
          })),
        },
      },
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil diubah",
      data: updatedInstansi,
    });
  } catch (error) {
    console.error("error update instansi : ", error);
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mengubah data",
    });
  }
};

const deleteInstansi = async (req, res) => {
  const { id } = req.params;
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: id,
      },
    });

    if (!instansi) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    await prisma.usedApps.deleteMany({
      where: {
        instansi_id: id,
      },
    });

    await prisma.instansi.delete({
      where: {
        id: id,
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
  getFormEditInstansi,
  getInstansiByParams,
  getFormInstansi,
  getInstansi,
  createIntansi,
  updateInstansiApp,
  deleteInstansi,
};
