var express = require('express');
var router = express.Router();
let usersController = require("../controller/usersController");

/* GET users listing. */


router.get("/register", (req,res)=>{
  res.render("register")
});

router.get("/login", (req,res)=>{
  res.render("login")
});

router.post("/", usersController.create)



module.exports = router;
