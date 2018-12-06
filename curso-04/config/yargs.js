const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion del objeto por crear'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado/pendiente el elemento'
    }
}
const argv = require('yargs')
    .command('listar', 'lista elementos')
    .command('crear', 'crear un elemento', opts)
    .command('actualizar', 'actualizar un elemento', opts)
    .command('borrar', 'elimina un elemento', opts)
    .help()
    .argv;

module.exports = {
    argv
}