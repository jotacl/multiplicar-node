 const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

 const argv = require('./config/yargs').argv;
 const colors = require('colors');

 let comando = argv._[0];

 switch (comando) {

     case 'listar':
         //console.log('Listar');

         listarTabla(argv.base, argv.limite)
             .then(tabla => console.log(`${tabla}`))
             .catch(err => console.log(err));
         break;
     case 'crear':
         // console.log('crear');
         crearArchivo(argv.base, argv.limite)
             .then(archivo => console.log(`archivo creado ${archivo}`.green))
             .catch(err => console.log(err));
         break;
     default:
         console.log('Comando no reconocido');
 }


 let argv2 = process.argv;

 // let parametro = argv[2];
 // let base = parametro.split('=')[1];

 //console.log(argv);