const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Estado de la tarea por hacer'
};

const argv = require('yargs')

.command('Crear', 'Crear tarea por hacer', {
        descripcion
    })
    .command('Actualizar', 'Actualizar tareas por hacer', {
        descripcion,
        completado
    })
    .command('Borrar', 'Borrar tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}