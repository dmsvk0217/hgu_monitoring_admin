module.exports = (app) => {
  const router = require("express").Router();
  const mainController = require("../controllers/main.controller");

  router.post("/rawData/day", mainController.getRawDataInDay);
  router.post("/errData/day", mainController.getErrDataInDay);
  router.put("/errData/oneById", mainController.updateErrDataById);

  app.use("/api", router);
};
