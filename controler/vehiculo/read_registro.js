const registro = require("../../model/registro")

const registro_id = async (req,res) =>{
    const {id} = req.params
    try {
      var data=await registro.findAll({where:{vehiculoid:id}})
      return res.status(200).json(data)
    } catch (error) {
      return res.status(404).json('Not Found')
    }
      
}

module.exports = registro_id