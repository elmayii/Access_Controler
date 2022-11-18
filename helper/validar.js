const tipos = ['oficial','residente']

const validar = (vehiculo) =>{
    const {matricula, clasificacion} = vehiculo

    if(!matricula == ''|| !clasificacion ==''){
        if(matricula.length<10){
            if(clasificacion.toLowerCase()===tipos[0]||clasificacion.toLowerCase()===tipos[1]){
                return true
            }
        }
    }

    return false
}

module.exports = validar