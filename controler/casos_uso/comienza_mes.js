const registro= require("../../model/registro.js");
const vehiculo = require("../../model/vehiculos.js");
const tipos = ['oficial','residente']

const comienza_mes = async (req,res) =>{
  try {
    //Destruir registros de oficiales
    await registro.destroy({
        where: {
          clasificacion: 'oficial'
        }
      })
    //Hacer cero el tiempo acumulado de los vehiculos residentes
    await vehiculo.update({total_acumulado:0},{where:{clasificacion:tipos[1]}})
    return res.status(200).json('DataBase Update')
  } catch (error) {
    return res.status(500).json('Something happend')
  }
}

module.exports= comienza_mes