//let db = require("../database/models");
let fs = require("fs");
let path = require("path");

const lectura_fotos = fs.readFileSync("data/fotos.json");
let fotos_json = JSON.parse(lectura_fotos)
console.log(fotos_json)

const fotosController = {

    listado:(req,res) =>{
       
        res.render("fotos",{fotos_json});
        
        
    }
    
}

module.exports = fotosController;