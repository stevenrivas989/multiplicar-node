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
    .command('crear', 'Imprime en la consol la tabla de multiplicar', opts)
    .command('listar', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = argv