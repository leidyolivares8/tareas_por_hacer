const fs = require('fs');

//3.arreglo es una lista para agregar,agrupar varios objetos
let listadoporhacer = [];


const getcrear = (descripcion) => {
    //1.recibo la descripcion
    cargardb(); //5. leer y cargar el carchivo json
    //2.creo un objeto para tener la descripcion y el estado, elobjeto es uno solo
    let porhacer = {
            descripcion,
            completado: false
        } //destro del objeto puedo tener un array ejm los impletos para la tarea

    //3.creo un arreglo vacio para colocar el objeto.flex-sm-wrap-reverse
    listadoporhacer.push(porhacer);
    guardardb(); //4. guardar en archivo JSON
    return listadoporhacer;
}

const guardardb = () => {
    //guardar en archivo json
    let data = JSON.stringify(listadoporhacer);
    fs.writeFile('db/tareas.json', data, (err) => {
        if (err) throw new err('No se pudo  grabar', err)
    });

}

const getlistado = () => {
    cargardb();
    return listadoporhacer;
}

const cargardb = () => {
    //leer archivo json
    try {
        listadoporhacer = require('../db/tareas.json'); //cargar en el arreglo el archivo json
    } catch (error) {
        listadoporhacer = []; //error array vacio
        console.log(error);
    }

}

const actualizar = (descripcion, completado = true) => {
    cargardb();
    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardardb();
        return 'Actualizado';
    } else {
        return 'No actualizo';
    }
}


const getborrar = (descripcion) => {
    cargardb();
    let nuevolistado = listadoporhacer.filter(tarea => { //filtra la tarea y lo colocamos en otro listado
        return tarea.descripcion !== descripcion
    });


    if (listadoporhacer.length === nuevolistado.length) { //si el array es igual al nuevoarray
        return 'No se elimino la tarea';
    } else {
        listadoporhacer = nuevolistado;
        guardardb();
        return 'Se elimino la tarea';
    }

}

module.exports = {
    getcrear,
    actualizar,
    getlistado,
    getborrar
}