const vehiculo = require("../../model/vehiculos")

const create = async (req,res) =>{
    const {matricula,clasificacion} = req.body
    const data =await vehiculo.findOne({where:{
        matricula:matricula
    }})
        if(data){
            return res.status(400).json('Bad Request')
        }
        else{
            try{
                await vehiculo.create({
                    matricula,
                    clasificacion
                })
                return res.status(201).json("Create Succes")
            }
            catch(error){
                console.log(error)
                return res.status(500).json('Something Happend')
            }
        }
        
}

module.exports = create