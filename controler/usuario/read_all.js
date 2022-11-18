const Usuarios = require("../../model/usuarios")

const read_all = async (req,res) =>{
    const {limit,Offset} = req.headers
    try {
      await Usuarios.findAll({offset:Number(Offset),limit:Number(limit)})
    .then((data) =>{
        return res.status(200).json(data)
    })  
    } catch (error) {
        return res.status(400).json('Bad Request')
    }
    
}

module.exports = read_all