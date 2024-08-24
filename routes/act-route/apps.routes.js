const express = require("express");
const {
  getApps,
  getAppById,
  createApp,
  updateApp,
  deleteApp,
} = require("../../controllers/apps.controller");
const { validateUsedApps } = require("../../middleware/validate-input");
const appsRouter = express.Router();

appsRouter.get("/apps", getApps);
appsRouter.get("/apps/:id", getAppById);
appsRouter.post("/apps", validateUsedApps, createApp);
appsRouter.put("/apps/:id/edit", validateUsedApps, updateApp);
appsRouter.delete("/apps/:id/delete", deleteApp);

module.exports = appsRouter;
