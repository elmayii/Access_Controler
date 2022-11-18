const listado = require('../model/vehiculos.js')
const tipos = ['oficial','residente']
const Importe = require('../helper/Importe.js')
const writeXlsxFile = require('write-excel-file/node')

//Generar el fichero
const generarFile = async (Name) =>{
    var objects = []
    let vehiculo

      await listado.findAll({where:{clasificacion:tipos[1]}})
         .then((data) =>{
             try {
               if(data[0]){
                 data.forEach(element => {
                     const {matricula,clasificacion,total_acumulado}= element.dataValues
                     const importe= Importe(clasificacion,total_acumulado)
                    
                    vehiculo = {
                        matricula,
                        total_acumulado,
                        importe
                    }
                     objects.push(vehiculo);
                     console.log(vehiculo)
                    }) 
                }
             } catch (error) {
                console.log(error) 
             }
            })

            var schema = [
                {
                column: 'Núm. placa',
                type: String,
                value: vehiculo => vehiculo.matricula
              },
              {
                column: 'Tiempo estancia(min)',
                type: Number,
                value: vehiculo => vehiculo.total_acumulado
              },
              {
                column: 'Cantidad a pagar',
                type: Number,
                value: vehiculo => vehiculo.importe
              }
        ]


      const stream= writeXlsxFile(objects,{schema,buffer:true,fileName:Name})
    
    return stream
}

module.exports = generarFile