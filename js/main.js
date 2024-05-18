import fs from 'fs';

// Utilizamos fs para leer el archivo data.json (utilizar ruta relativa)
fs.readFile("db/data.json", function(err, data) {
    // Si hay un error, lo mostramos en consola
    if (err) throw err;
    // Si no hay error, mostramos el contenido del archivo en consola
    return data.toString()
})

// Esta es otra forma de hacerlo de forma sincronica
const data = JSON.parse(fs.readFileSync("db/data.json"));

//Se añade a el archivo data.json la nueva informacion (objeto)
data.push({
    "id": 4,
    "nombre": "Mariana Traslavina",
    "correo_electronico": "mariana.traslavina@ejemplo.com",
    "edad": 17,
    "genero": "femenino",
    "direccion": "Calle 112, Ciudad del Ejemplo",
    "telefono": "+57 324 4195352",
    "fecha_creacion": "2024-06-18T18:00:00Z"
  })


fs.writeFileSync("db/data.json", JSON.stringify(data));   


// --------------------------------

//Renombrar archivos (sincronico)
fs.renameSync("db/data.json", "db/dataRENOMBRADO.json")

// //Eliminar archivos (sincronico)
fs.unlinkSync("db/dataRENOMBRADO.json")