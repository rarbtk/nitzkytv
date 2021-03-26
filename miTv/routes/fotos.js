var express = require('express');
var router = express.Router();
var fotosController = require("../controller/fotosController");


router.get("/fotos", fotosController.listado);

router.get("/videos", function(req,res){
  res.render("videos")
})

router.get("/register", (req,res)=>{
  res.render("register")
})
  
  module.exports = router;