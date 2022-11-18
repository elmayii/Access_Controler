const tipos = ['oficial','residente']
const math = require('mathjs')

const Importe = (clasificacion,minutos) =>{
    var importe;
    if(clasificacion===tipos[1]){
        importe=minutos * 0.05
    }
    else{
        importe=minutos*0.5
    }
    console.log(importe)
    return math.round(importe)
}

module.exports = Importe