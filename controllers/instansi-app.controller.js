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

    if (instansi.length === 0) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak diemukan",
      });
    }

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
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan ketika mengambil data",
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
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!instansi) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    const updatedInstansi = await prisma.instansi.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil diubah",
      data: updatedInstansi,
    });
  } catch (error) {
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
        id: Number(id),
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
        instansi_id: Number(id),
      },
    });

    await prisma.instansi.delete({
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
  getInstansiByParams,
  getInstansi,
  createIntansi,
  updateInstansiApp,
  deleteInstansi,
};
