const Usuarios = require("../model/Usuarios.js")

const validarUser = async (Name) =>{
    let flag=false
    await Usuarios.findOne({where:{Name:Name}})
    .then(async (data) =>{
        if(data){
            console.log('existe el usuario')
        }
        else{
                    let pat_mail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/g
                    if(pat_mail.test(Name)){
                       flag= true
                    }
                    else{
                        console.log('mail no valido')
                    }
        }
    })
    return flag
}

module.exports= validarUser