let fs = require("fs");
let path = require("path");

const usuarios = fs.readFileSync("data/users.json");
let usuarios_json = JSON.parse(usuarios);

const usersController ={
    listado_usuarios : (req, res) =>{
        res.render("users", { usuarios_json})
    },

    create: (req,res)=>{

    },

    Storage: (req,res) =>{

    },
};






module.exports = usersController;