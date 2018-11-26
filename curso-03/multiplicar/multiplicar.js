const fs = require('fs');

let mostrarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No se recibió un número como parámetro para la base (${base})`);
            return;
        }

        if (!Number(limite)) {
            reject(`No se recibió un número como parámetro para el límite (${limite})`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}` + '\n';
        }
        resolve(data)
    })
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No se recibió un número como parámetro para la base (${base})`);
            return;
        }

        if (!Number(limite)) {
            reject(`No se recibió un número como parámetro para el límite (${limite})`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}` + '\n';
        }

        let nombreArchivo = `./tablas/tabla-${base}.txt`

        fs.writeFile(nombreArchivo, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
        })
    });
}


module.exports = {
    crearArchivo,
    mostrarTabla
}