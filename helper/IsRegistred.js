const registro= require('../model/registro')
const vehiculo = require('../model/vehiculos')

//Verificar si el vehiculo esta estacionado
const Isregistered = async(Vehiculo) =>{
    let {id} = Vehiculo
    let flag= true
       await registro.findOne({where:{vehiculoid:id,fecha_salida:null}})
        .then((data) =>{
            if(!data){ 
                flag= false
            }
        }) 
    return flag
}

module.exports = Isregistered