const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs');

let argv2 = process.argv;
// let base = argv.base;

let command = argv._[0];

switch (command) {
    case 'listar':
        console.log("Get");
        listarTabla(argv.base,argv.limite)
            .then(data=>console.log('El listado es correcto'))
            .catch(err=>console.error(err));
        break;
    case 'crear':
        console.log("Post");
        crearArchivo(argv.base)
            .then(data => console.log(`El archivo ${data} ha sido creado`))
            .catch(err => console.error(err));

        break;

    default:
        console.log('Command undefined');

        break;
}

// console.log(argv2);

// let param = argv[2];
// let base = param.split('=')[1];

