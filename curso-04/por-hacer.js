const { crearArchivo } = require('../comunes/crearArchivo');
let listadoPorHacer = [];

const guardarDB = () => {
    crearArchivo('../curso-04/listasPorHacer/data.json', JSON.stringify(listadoPorHacer))
        .catch((err) => {
            console.log(err);
        });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('./listasPorHacer/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargarDB();

    let elemento = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(elemento);

    guardarDB();

    return true;
}

const actualizar = (descripcion, completado) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }

    return false;
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}