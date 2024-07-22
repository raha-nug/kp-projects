const express = require("express");
const { authRouter } = require("./auth/auth.routes");
const {
  sopCreateEmail,
  sopCreateEmailEGoverment,
  sopCreateDomain,
  sopCreateHosting,
  sopMigrateToSidekaNG,
  sopCreateServer,
  sopMaintainanceInfrastructor,
} = require("../utils/data");
const { checkRole, isLoggedIn } = require("../utils/verify");

const { instansiPageRouter } = require("./ip/instansi.routes");
const { adminPageRouter } = require("./ip/admin.routes");
const { kabidPageRouter } = require("./ip/kabid.routes");
const { operatorPageRouter } = require("./ip/operator.routes");

const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  res.render("dashboard-umum");
});

ipRouter.use("/instansi", isLoggedIn, checkRole("PEMOHON"), instansiPageRouter);
ipRouter.use("/admin", isLoggedIn, checkRole("ADMIN"), adminPageRouter);
ipRouter.use("/kabid", isLoggedIn, checkRole("KABID"), kabidPageRouter);
ipRouter.use(
  "/operator",
  isLoggedIn,
  checkRole("OPERATOR"),
  operatorPageRouter
);

ipRouter.use("/auth", authRouter);

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

    case "pengajuan-perawatan-infrastruktur":
      sop = sopMaintainanceInfrastructor;
      break;

    default:
      res.send("Halaman tidak tersedia");
      return;
      break;
  }

  res.render("sop", { sop });
});

ipRouter.get("/instansi", (req, res) => {
  res.render("dashboard-instansi");
});

module.exports = { ipRouter };
