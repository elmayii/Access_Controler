const Usuarios = require("../../model/Usuarios");
const generarJWT= require('../../helper/generarJWT.js')
const time = require('../../helper/time.js')

const Loggin = async (req,res) =>{
    const {name,pass} = req.body

    const usuario={name,pass}
    let date =time()
    let id=await exist(usuario)
    if(id){
        try {
           const token= await generarJWT(id,date)
           await Usuarios.update({login:date},{where:{
            id:id
           }})
           return res.status(200).json({'token': token})
        } catch (error) {
            console.log(error)
            res.status(500).json("Problema de servidor")
        }
    }
    else{
        res.status(401).json("Authentification Error")
    }
}

async function exist(usuario) {
    const {name,pass} = usuario
    let id

    try {
        await Usuarios.findOne({where:{
        Name:name,
        Pass:pass
    }})
        .then(async (data) =>{
            if(data){
                id= data.dataValues.id
            }
        })
        return id
    } catch (error) {
        console.log(error)
        return null
    }
    }

    module.exports = Loggin
