const jwt = require('jsonwebtoken')
const Usuarios = require('../../model/usuarios');

const Logout = async (req,res) =>{
    const {token} = req.query

    try {
        const jwtData = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        console.log(jwtData)
        const {id} = jwtData
        try {
           await Usuarios.update({login:null},{where:{
            id:id,
        }}) 
        return res.status(200).json("Logout succes")
        } catch (error) {
            console.log(error)
            return res.status(500).json("Something happend")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something happend")
    }
}

module.exports = Logout