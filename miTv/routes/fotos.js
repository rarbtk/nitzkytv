var express = require('express');
var router = express.Router();
var fotosController = require("../controller/fotosController");


router.get("/fotos", fotosController.listado);
  
  module.exports = router;