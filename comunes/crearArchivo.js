const fs = require('fs');

let crearArchivo = (nombreArchivo, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
        })

    })
}

module.exports = {
    crearArchivo
}