const Usuarios = require("../../model/usuarios")

const create = async (req,res) =>{
    const {Name,Pass} = req.body
        try{
            await Usuarios.create({
                Name,
                Pass
            })
            return res.status(201).json("Create Succes")
        }
        catch(error){
            console.log(error)
            return res.status(500).json('Something happend')
        }
}

module.exports = create