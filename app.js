
const tareas = require ("./funcionesdetareas.js")

//preparo para poder leer lo que aparece en terminal
const myArgs = process.argv
//hago que se pueda listar o no
switch(myArgs[2]){
    case "listar" :
    tareas.forEach(function(valor){
        console.log("Titulo:" +  valor.titulo)
    });
    break;
    case undefined:
    console.log("Atencion- Tienes que pasar una accion");
    break;
    default:
        console.log("No entiendo que quieres hacer");
        break;
}

function escribirJSON(myArray){
    return stringify.myArray
}