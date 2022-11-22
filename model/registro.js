const Sequelize = require("sequelize");
const db = require('../config/db.js')
const vehiculo = require("./vehiculos")

const registro= db.define('registro',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_entrada:{
        type: Sequelize.DATE
    },
    fecha_salida:{
        type: Sequelize.DATE
    },
    fecha_pago:{
        type:Sequelize.DATE
    },
    vehiculoid:{
        type:Sequelize.INTEGER
    }
})

registro.belongsTo(vehiculo);

module.exports= registro