var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/register", (req,res)=>{
  res.render("register")
});

router.get("/login",(req,res) =>{
  res.render("login")
});

module.exports = router;
