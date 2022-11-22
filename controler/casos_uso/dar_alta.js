const Vehiculo = require("../../model/vehiculos.js");
const validar = require('../../helper/validar.js')

const dar_alta = async (req,res) =>{
    const vehiculo= req.body
    let total_acumulado=0;
    const {matricula,clasificacion} = vehiculo

    if(validar(vehiculo)){
        try{
            await Vehiculo.create({
                matricula,
                clasificacion,
                total_acumulado
            })
            return res.status(201).json('DataBase Update')
            }
            catch(error){
                console.log(error)
                return res.status(500).json('Something Happend')
            }
    }
    else{
        return res.status(400).json('Bad Request')
    }
}

module.exports= dar_alta