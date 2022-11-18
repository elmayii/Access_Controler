const registro = require("../../model/registro")

const read_registro = async (req,res) =>{
    const {limit,Offset} = req.headers
    try {
      await registro.findAll({offset:Number(Offset),limit:Number(limit)})
    .then((data) =>{
        return res.status(200).json(data)
    })  
    } catch (error) {
        console.log(error)
        return res.status(400).json('Bad Request')
    }
    
}

module.exports = read_registro