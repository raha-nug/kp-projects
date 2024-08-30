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
} = require("../utils/data");
const dashboardRouter = require("./dashboard.routes");
const authRouter = require("./auth/auth.routes");

const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  res.render("landing-page-ip", { layananIp: layananIP });
});

ipRouter.use("/dashboard", dashboardRouter);

ipRouter.use("/auth", authRouter);

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
    const data = await prisma.usedApps.count();
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
