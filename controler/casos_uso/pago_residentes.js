const listado = require("../../model/vehiculos.js");
const registro= require("../../model/registro.js")
const tipos = ['oficial','residente']
const time = require('../../helper/time.js')
const generarFile = require('../../helper/generarFile')
const mime = require('mime-types');
const vehiculo = require("../../model/vehiculos.js");

const pago_residentes = async(req,res,next) =>{
    const {fileName} = req.params
    let minutos=0
    let Vehiculo
    try{
    //Buscar todos los residentes
    await registro.findAll({where: {
        fecha_salida:null
    }})
    .then(async (data) =>{
        try {
            if(data[0]){
              //Procesar cada uno de los vehiculos
                data.forEach(async element => {
                  Vehiculo=await vehiculo.findByPk(element.dataValues.vehiculoid)
                  if(Vehiculo.dataValues.clasificacion==tipos[1]){
                    //Verificar si ya pagaron en la estancia
                    if(element.dataValues.fecha_pago===null){
                      //calcular estancia
                      minutos=(time().getTime()/60000) - (element.dataValues.fecha_entrada.getTime()/60000)
                    }
                    else{
                      //calcular estancia
                      minutos=(time().getTime()/60000) - (element.dataValues.fecha_pago.getTime()/60000)
                    }

                    //actualizar fecha de pago
                  await registro.update({ fecha_pago:time() }, {
                    where: {
                      vehiculoid:Vehiculo.dataValues.id,
                      fecha_salida:null
                    }
                  });
                  await vehiculo.increment({total_acumulado:minutos},{
                     where:{
                        matricula:Vehiculo.dataValues.matricula
                    }
                    })
                  }
                })
            }
            else{
              return res.status(404).json("Registro vacio")
            }
            try{
              //Generar el fichero
            const reporte= await generarFile(fileName)
            console.log(reporte)


          //Enviar el fichero
         res.setHeader("Content-Type",mime.lookup('report.xlsx')); 
                 res.writeHead(200);
                 res.end(reporte);
         } catch (error) {
         console.log(error)
         throw error
        }            
        } catch (error) {
            console.log(error)
            throw error
        }
    })
  }
  catch(error){
    return res.status(500).json('Something happend')
  }
}

module.exports = pago_residentes