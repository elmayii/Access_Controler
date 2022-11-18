const Usuarios = require("../../model/usuarios")

const Delete = async (req,res) =>{
    const {id} = req.params
    try{
        await Usuarios.destroy({where:{
            id:id
        }})
        return res.status(200).json('User delete')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = Delete