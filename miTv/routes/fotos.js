var express = require('express');
var router = express.Router();
var fotosController = require("../controller/fotosController");


router.get("/fotos", fotosController.listado);

router.get("/videos", function(req,res){
  res.render("videos")
})


  
  module.exports = router;