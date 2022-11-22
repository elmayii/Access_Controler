const Vehiculo = require("../../model/vehiculos.js");
const registro= require("../../model/registro.js")
const tipos = ['oficial','residente']
const time = require('../../helper/time.js')
const Isregistered = require('../../helper/IsRegistred.js');

const Registrar_Entrada= async (req,res) =>{
    try{
    const vehiculo= req.body
    let {matricula} = vehiculo

        //verificar si existe
            let car= await Vehiculo.findOrCreate({where:{matricula:matricula},defaults:{
                matricula:matricula,
                clasificacion:'no residente'
            }})
            console.log(car)
            if(await Isregistered(car[0].dataValues)==false){
                try {
                    const fecha_entrada=time()
                    await registro.create({
                        fecha_entrada,
                        vehiculoid:car[0].dataValues.id
                    })
                } catch (error) {
                    console.log(error)
                    throw error;
                } 
            }
            else{
                return res.status(400).json('El vehiculo se encuentra estacionado')
            }
        }
        catch (error){
            console.log(error)
            return res.status(500).json("Something Happend")
        }
        return res.status(200).json('DataBase Update')
            
}

module.exports= Registrar_Entrada