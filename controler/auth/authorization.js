const jwt = require('jsonwebtoken');
const Usuarios = require("../../model/Usuarios");

const authorization = async (req,res,next) =>{
    const {token} = req.headers;

    console.log(token)
    if(!token) return res.status(401).json("Authorization Error");
    try {
        const jwtData = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        console.log(jwtData)
        const {id,date}=jwtData
        let data=await Usuarios.findOne({where:{
            id:id,
            login:date
        }})
        if(!data){
            return res.status(401).json("Autorization Error")
        }
        return next()
    } catch (error) {
        console.log(error)
        return res.status(401).json("Autorization Error")
    }
}

module.exports = authorization
