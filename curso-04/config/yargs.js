const opts = {
    descripcion: {
        alias: 'd'
    },
}
const argv = require('yargs')
    .command('crear', 'crear un elemento', opts)
    .command('actualizar', 'actualizar un elemento', {
        opts,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}