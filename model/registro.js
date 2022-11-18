const Sequelize = require("sequelize");
const db = require('../config/db.js')

const registro = db.define('registro',{
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
})

registro.belongsTo(vehiculo);

module.exports= registro