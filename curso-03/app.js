const { crearArchivo, mostrarTabla } = require('../multiplicar/multiplicar');
const argv = require('../config/yargs').argv;
require('colors');

let comando = argv._[0]

switch (comando) {
    case 'list':
        mostrarTabla(argv.base, argv.limite)
            .then(data => console.log(data.green.bold))
            .catch(err => console.log(err.red.bold));
        break;

    case 'file':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo.green} creado`.bold))
            .catch(err => console.log(err.red.bold));
        break;

    default:
        console.log('Comando no existente');

}