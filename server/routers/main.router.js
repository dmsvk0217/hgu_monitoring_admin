module.exports = (app) => {
  const router = require("express").Router();
  const mainController = require("../controllers/main.controller");

  router.post("/rawData/day", mainController.getRawDataInDay);
  router.post("/errData/day", mainController.getErrDataInDay);
  router.put("/errData", mainController.updateErrDataById);

  router.get("/nodeInfo", mainController.getNodeInfo);
  router.post("/nodeInfo", mainController.createNodeInfo);
  router.put("/nodeInfo", mainController.updateNodeInfo);
  router.delete("/nodeInfo", mainController.deleteNodeInfo);

  app.use("/api", router);
};
