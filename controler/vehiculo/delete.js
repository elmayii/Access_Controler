const vehiculo = require("../../model/vehiculos")

const Delete = async (req,res) =>{
    const {id} = req.params
    try{
        await vehiculo.destroy({where:{
            id:id
        }})
        return res.status(200).json('Vehicule delete')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = Delete