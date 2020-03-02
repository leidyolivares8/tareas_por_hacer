const argv = require('./config/yargs').argv;
const porhacer = require('./Porhacer/por_hacer');
const colors = require('colors');
//const argv = require('yargs').argv;
console.log(argv);


let comando = argv._[0];

switch (comando) {

    case 'Crear':
        let tarea = porhacer.getcrear(argv.descripcion);
        console.table(tarea);
        break;
    case 'Listar':
        let listado = porhacer.getlistado();
        for (let tarea of listado) {
            console.log('===============POR HACER=============='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('======================================='.green);
        }
        break;
    case 'Actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'Borrar':
        let borrado = porhacer.getborrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reaconocido ');

}