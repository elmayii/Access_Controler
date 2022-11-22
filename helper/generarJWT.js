const jwt = require('jsonwebtoken');
const time = require('./time');

const generarJWT = (id,date) => {

    return new Promise( (resolve, reject) => {

        jwt.sign( {id,date}, 'wpf8r3vj0sSvVD', ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve( token );
            }
        })

    })
}


module.exports = generarJWT
