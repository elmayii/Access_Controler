const registro = require("../../model/registro")
const vehiculo = require("../../model/vehiculos")

const update = async (req,res) =>{
    const {newMatricula,newClasificacion}= req.body
    const {id}= req.params
    try {
        await vehiculo.update({matricula:newMatricula,clasificacion:newClasificacion},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update