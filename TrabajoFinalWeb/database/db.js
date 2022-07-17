//Importamos modulos usados en la clase/componente.
const mysql = require ('mysql');

//Definimos la conexion a la BD.
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_final_db'
});

//Conectamos a la BD.
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Conectado a la BD MySQL: tp_final_db');
});

//Exportamos el componente/modulo para que sea visible para otros componetnes/modulos.
module.exports = conexion;