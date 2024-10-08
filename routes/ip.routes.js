const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  sopCreateEmail,
  sopCreateEmailEGoverment,
  sopCreateDomain,
  sopCreateHosting,
  sopMigrateToSidekaNG,
  sopCreateServer,

  layananIP,
  dataPegawai,
} = require("../utils/data");
const dashboardRouter = require("./dashboard.routes");
const authRouter = require("./auth/auth.routes");

const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  const pegawaiPns = dataPegawai.filter(
    (pegawai) => pegawai.type === "PNS"
  ).length;
  const pegawaiNonPns = dataPegawai.filter(
    (pegawai) => pegawai.type === "NON PNS"
  ).length;

  res.render("landing-page-ip", {
    layananIp: layananIP,
    pegawaiPns: pegawaiPns,
    pegawaiNonPns: pegawaiNonPns,
    dataPegawai: dataPegawai,
  });
});

ipRouter.use("/dashboard", dashboardRouter);

ipRouter.use("/auth", authRouter);

ipRouter.get('/perbub',(req,res)=>{
  res.render('perbub')
})

ipRouter.get("/:slug", async (req, res) => {
  const slug = `/ip/${req.params.slug}`;
  let sop = [];

  const sopMapping = {
    "/ip/pengajuan-server": sopCreateServer,
    "/ip/pengajuan-sideka": sopMigrateToSidekaNG,
    "/ip/pengajuan-hosting": sopCreateHosting,
    "/ip/drive-e-goverment": sopCreateEmailEGoverment,
    "/ip/email-tasikmalayakab": sopCreateEmail,
    "/ip/pengajuan-domain": sopCreateDomain,
    "/ip/pengajuan-domain": sopCreateDomain,
    // tambah 3 data
  };

  if (sopMapping[slug]) {
    sop = sopMapping[slug];
  } else if (slug === "/ip/jumlah-app-desa") {
    const data = await prisma.usedApps.count({
      where: {
        instansi: {
          type: "desa",
        },
      },
    });
    return res.render("app-desa", { data: data });
  } else if (slug === "/ip/jumlah-desa-blankspot") {
    const data = await prisma.desaBlankspot.count();
    return res.render("desa-blankspot", { data: data });
  } else if (slug === "/ip/pengajuan-alat-zoom") {
    return res.render("pengajuan-zoom");
  }

  res.render("sop", { sop });
});

module.exports = { ipRouter };
