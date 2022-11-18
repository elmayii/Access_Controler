const Sequelize = require("sequelize");
const db = require('../config/db.js');
const registro = require("./registro.js");

const vehiculo = db.define('vehiculos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    matricula:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg:'La matricula es unica'
        }
    },
    clasificacion:{
        type:Sequelize.STRING
    },
    total_acumulado:{
        type:Sequelize.INTEGER
    },
})

vehiculo.hasMany(registro, {
    foreignKey: {
      name: "vehiculoid",
      allowNull: false,
    },
    onDelete: "CASCADE",
  });
  

module.exports= vehiculo