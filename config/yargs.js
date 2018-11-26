const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('list', 'imprime lista', opts)
    .command('file', 'genera archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}