/*const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) =>{
    let alias = "imagenes";

    let cols = {
        id: { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        descripcion: {
            type: dataTypes.STRING

        }
    }
    let config = {
        tableName: "fotos",
        timestamps: false
    }
}
let imagenes = sequelize.define(alias,cols,config);*/