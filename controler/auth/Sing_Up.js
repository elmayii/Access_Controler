const Usuarios = require("../../model/Usuarios");
const validarUser= require('../../helper/validarUser.js')

const Sing_Up = async (req,res) =>{
    const usuario = req.body
    const {Name,Pass} = usuario
    if(await validarUser(Name)){ 
        try{
            await Usuarios.create({
                Name,
                Pass
            })
            return res.status(200).json("Sing Up Succes")
        }
        catch(error){
            console.log(error)
            return res.status(500).json('Problema del servidor')
        }
    }
    else{
        return res.status(400).json('Bad Request')
    }
}

module.exports= Sing_Up