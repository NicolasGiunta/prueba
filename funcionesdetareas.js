//llamo a tares
const fs=require ("fs");
//lo leo y lo selecciono en castellano
const tareasjson =fs.readFileSync("./tareas.json","utf-8");
//lo transformo en java
const tareas=JSON.parse(tareasjson)
//lo transformo en string
const tareasString = JSON.stringify(tareas)



//lo preparo para exportar
module.exports = tareas 