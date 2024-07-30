const express = require("express");
const {
  sopCreateEmail,
  sopCreateEmailEGoverment,
  sopCreateDomain,
  sopCreateHosting,
  sopMigrateToSidekaNG,
  sopCreateServer,
  sopMaintainanceInfrastructor,
} = require("../utils/data");



const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  res.render("dashboard-umum");
});



ipRouter.get("/sop/:slug", (req, res) => {
  const slug = req.params.slug;
  let sop = [];

  switch (slug) {
    case "pembuatan-email-tasikmalayakab":
      sop = sopCreateEmail;
      break;

    case "pengajuan-domain":
      sop = sopCreateDomain;
      break;

    case "pembuatan-email-e-goverment":
      sop = sopCreateEmailEGoverment;
      break;

    case "pengajuan-hosting":
      sop = sopCreateHosting;
      break;

    case "migrasi-sidekang":
      sop = sopMigrateToSidekaNG;
      break;

    case "pengajuan-server":
      sop = sopCreateServer;
      break;

    case "pengajuan-pemasangan-infrastruktur":
      sop = sopMaintainanceInfrastructor;
      break;

    default:
      res.send("Halaman tidak tersedia");
      return;
      break;
  }

  res.render("sop", { sop });
});



module.exports = { ipRouter };
