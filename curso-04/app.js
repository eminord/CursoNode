const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer');
require('colors');

let listado = [];
let comando = argv._[0];

switch (comando) {
    case 'crear':
        if (porHacer.crear(argv.descripcion)) {
            console.log('Tarea ', argv.descripcion, ' creada.');
        } else {
            console.log('Tarea ', argv.descripcion, ' no creada.');
        }

        break;
    case 'actualizar':
        if (porHacer.actualizar(argv.descripcion, argv.completado)) {
            console.log('Tarea ', argv.descripcion, ' actualizada.');
        } else {
            console.log('Tarea ', argv.descripcion, ' no encontrada.');
        }

        break;
    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Completado => ', tarea.completado);
            console.log('==========================='.green);
            console.log('');
        }

        break;
    case 'borrar':
        if (porHacer.borrar(argv.descripcion)) {
            console.log('Tarea ', argv.descripcion, ' eliminada.');
        } else {
            console.log('Tarea ', argv.descripcion, ' no econtrada.');
        }
        break;
    default:
        //codigo;
        break;
}