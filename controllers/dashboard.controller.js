const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSummary = async (req, res) => {
  try {
    const allApps = await prisma.usedApps.count();
    const allDesaApps = await prisma.usedApps.count({
      where: {
        instansi: {
          type: "desa",
        },
      },
    });

    const allDinasApps = await prisma.usedApps.count({
      where: {
        instansi: {
          type: "dinas",
        },
      },
    });
    const allBlankspot = await prisma.desaBlankspot.count();

    const data = {
      total_aplikasi: allApps,
      total_aplikasi_desa: allDesaApps,
      total_aplikasi_dinas: allDinasApps,
      total_desa_blankspot: allBlankspot,
    };

    res.render("dashboard", {
      data: data,
      type: "dashboard",
      name: req.user.name,
    });
  } catch (error) {}
};

module.exports = { getSummary };
