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

const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  res.render("dashboard-umum", { layananIp: layananIP });
});

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
  }

  res.render("sop", { sop });
});

module.exports = { ipRouter };
