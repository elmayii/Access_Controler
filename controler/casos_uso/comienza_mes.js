const { forEach } = require("mathjs");
const registro= require("../../model/registro.js");
const vehiculo = require("../../model/vehiculos.js");
const tipos = ['oficial','residente']

const comienza_mes = async (req,res) =>{
  try {
    //Destruir registros de oficiales
    let oficiales=await vehiculo.findAll({
        where: {
          clasificacion: 'oficial'
        }
      })
      if(oficiales[0]){
        oficiales.forEach(async element =>{
          registro.destroy({where:{vehiculoid:element.dataValues.id}})
        })
      }

      
    //Hacer cero el tiempo acumulado de los vehiculos residentes
    await vehiculo.update({total_acumulado:0},{where:{clasificacion:tipos[1]}})
    return res.status(200).json('DataBase Update')
  } catch (error) {
    console.log(error)
    return res.status(500).json('Something happend')
  }
}

module.exports= comienza_mes