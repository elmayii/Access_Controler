const registro= require('../model/registro')
const vehiculo = require('../model/vehiculos')

//Verificar si el vehiculo esta estacionado
const Isregistered = async(Vehiculo) =>{
    let {id} = Vehiculo
    let flag= false
       await registro.findOne({where:{vehiculoid:id,fecha_salida:null}})
        .then((data) =>{
            if(data){ 
                flag= true
            }
        }) 
    return flag
}

module.exports = Isregistered