const vehiculo = require("../../model/vehiculos")

const read_all = async (req,res) =>{
    const {limit,Offer} = req.header
    try {
      await vehiculo.findAll({offset:Number(Offset),limit:Number(limit)})
    .then((data) =>{
        return res.status(200).json(data)
    })  
    } catch (error) {
        console.log(error)
        return res.status(400).json('Bad Request')
    }
    
}

module.exports = read_all