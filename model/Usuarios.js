const Sequelize = require("sequelize");
const db = require('../config/db.js')

const Users = db.define('usuarios',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name:{
        type: Sequelize.STRING,
        unique:{
            msg:'El nombre de usuario es unico'
        }
    },
    Pass:{
        type:Sequelize.STRING
    },
    login:{
        type:Sequelize.DATE
    }
})

module.exports = Users