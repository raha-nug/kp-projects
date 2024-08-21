const express = require("express");
const {
  sopCreateEmail,
  sopCreateEmailEGoverment,
  sopCreateDomain,
  sopCreateHosting,
  sopMigrateToSidekaNG,
  sopCreateServer,

  layananIP,
} = require("../utils/data");
const desaBlankspotRouter = require("./act-route/desa-blankspot.routes");
const instansiAppRouter = require("./act-route/instansi-app.routes");

const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  res.render("landing-page-ip", { layananIp: layananIP });
});

ipRouter.use("/", desaBlankspotRouter);
ipRouter.use("/", instansiAppRouter);

ipRouter.get("/:slug", (req, res) => {
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
    res.render("app-desa");
    return;
  } else if (slug === "/ip/jumlah-desa-blankspot") {
    res.render("desa-blankspot");
    return;
  }

  res.render("sop", { sop });
});

module.exports = { ipRouter };
