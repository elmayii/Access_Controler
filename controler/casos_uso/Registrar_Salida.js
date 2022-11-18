const time = require('../../helper/time.js')
const registro = require('../../model/registro.js')
const tipos = ['oficial','residente']
const importe = require('../../helper/Importe.js')
const vehiculo = require('../../model/vehiculos.js')

const Registrar_Salida= async (req,res) =>{
    const {id}= req.params
    let Status=200;
    let msg="DataBase Update"

    //Verificar si se encuentra estacionado
    try {
    let car=await registro.findOne({where:{vehiculoid:id,fecha_salida:null}})
    if(car){
      //Verificar si se encuentra listado
        car=await vehiculo.findByPk(car.dataValues.vehiculoid)
        if(car){
          switch (car.dataValues.clasificacion) {
            case tipos[0]:
              try {
                await Registrar_Salida_oficiales(id)
              } catch (error) {
                throw error
              }
              break;
            case tipos[1]:
              try {
                await Registrar_Salida_residentes(id)
              } catch (error) {
                throw error
              }
              break;
            default:
              try {
                const importe= await Registrar_Salida_noResidentes(id)
                return res.status(200).json(`importe:${importe}`)
              } catch (error) {
                throw error
              }
          }
    } 
  else{
      Status:404
      msg:"No esta listado"
    }
}
else{
  Status:404
  msg:"No estacionado"
}
}
catch(error){
  console.log(error)
  return res.status(500).json('Something Happend')
}

//Fin ejecucion
return res.status(Status).json(msg)

async function  Registrar_Salida_oficiales(id){
  try{
    await registro.update({ fecha_salida:time() }, {
        where: {
          id:id
        }
      }); 
    }
    catch(error){
        console.log(error)
    }
}

async function Registrar_Salida_residentes(id){
                // Variables para hacer el calculo
                let minutos=0;
                let total=0;
                try {
                  //Buscar el vehiculo
                await registro.findOne({where:{vehiculoid:id,fecha_salida:null}})
                  .then( async (data) =>{
                      //verificar si se pago mientras estaba estacionado
                      if (data.dataValues.fecha_pago===null) {
                        
                      //calcular tiempo
                      minutos=(time().getTime()/60000) - (data.dataValues.fecha_entrada.getTime()/60000)
                      await registro.update({ fecha_salida:time() }, {
                        where: {
                          vehiculoid:data.dataValues.id
                        }
                      });
                      await vehiculo.findOne({
                        where:{
                          id:data.dataValues.vehiculoid
                        }
                      })
                        .then(async (data) => {
                            //sumar tiempo acumulado para actualizar el listado
                            total=data.dataValues.total_acumulado+minutos
                            await vehiculo.update({total_acumulado: total},{
                              where:{
                                id:data.dataValues.vehiculoid
                              }
                            })
                        })
                      } 
                      else {
                        
                      //calcular tiempo
                      minutos=(time().getTime()/60000) - (data.dataValues.fecha_pago.getTime()/60000)
                      await registro.update({ fecha_salida:time() }, {
                        where: {
                          vehiculoid:id
                        }
                      });
                      await vehiculo.findOne({
                        where:{
                          id:id
                        }
                      })
                        .then(async (data) => {

                            //sumar tiempo acumulado para actualizar el listado
                            total=data.dataValues.total_acumulado+minutos
                            await vehiculo.update({total_acumulado: total},{
                              where:{
                                id:id
                              }
                            })
                        })
                      }
                  })
                } catch (error) {
                    console.log(error)
                    throw error
                }
}

async function Registrar_Salida_noResidentes(id){
  let minutos=0
          try {
            //actualizar su salida
           await registro.update({ fecha_salida:time() }, {
            where: {
              id:id
            }
          });
          await registro.findOne({where:{vehiculoid:id}})
          .then((data) =>{
              //calcular tiempo
              minutos=(data.dataValues.fecha_salida.getTime()/60000) - (data.dataValues.fecha_entrada.getTime()/60000)
              console.log(minutos)
          })
          } catch (error) {
            console.log(error)
            throw error
          }
          //retornar el valor del impuesto
          return importe('',minutos)
  }
} 

module.exports= Registrar_Salida