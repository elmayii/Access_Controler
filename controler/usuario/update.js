const Usuarios = require("../../model/usuarios")

const update = async (req,res) =>{
    const {newName,newPass}= req.body
    const {id} = req.params
    try {
        await Usuarios.update({Name:newName,Pass:newPass},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update