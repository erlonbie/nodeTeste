const express = require("express");
const router = express.Router();
const mainController = require("../app/controllers/main");

router.get("/teste/:nome", function (req, res) {
  res.send(`Bem-vindo, ${req.params.nome}`);
});

router.get("/", mainController.index);

router.get("/about", mainController.sobre);

router.get("/tabuada", mainController.tabuada);

module.exports = router;
