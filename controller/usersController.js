let fs = require("fs");
let path = require("path");

const usuarios = fs.readFileSync("data/users.json");
let usuarios_json = JSON.parse(usuarios);
const users = require("../models/users");

const usersController ={
    listado_usuarios :(req, res) =>{
        res.render("users", { usuarios_json})
    },

    create: async (req,res)=>{
       const {nombre, password, email, fecha} = req.body
       
        
       const usuario = new users({nombre, password,email, fecha});
       console.log(usuario)
       await usuario.save();
       res.render("./")

    },

    Storage: (req,res) =>{

    },
};






module.exports = usersController;