//Importamos clases/modulos usados en la clase/componente.
const conexion = require('../database/db');

//Definimos el metodo save para persistir los datos de un nuevo Alumno en la BD.
exports.save = (req, res) =>{
    //Constantes donde guardamos los datos ingresados en el formulario.
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;

    //Query para instertar el registro Alumno en la BD.
    conexion.query('INSERT INTO Alumno SET ?', {Nombre:nombre, Apellido:apellido, Email:email}, (error, results)=>{
        if (error) {
            console.log(error);
        } else {
            //Si no hubo errores, redirigimos al home.
            res.redirect('/');
        }
    });
}

//Definimos el metodo save para persistir los datos modificados para el Alumno que corresponde al ID pasado en la BD.
exports.update = (req, res) =>{
    //Constantes donde guardamos los datos ingresados en el formulario.
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;

    //Query para instertar el registro Alumno en la BD.
    conexion.query('UPDATE Alumno SET ? WHERE id = ?', [{Nombre:nombre, Apellido:apellido, Email:email} ,id], (error, results)=>{
        if (error) {
            console.log(error);
        } else {
            //Si no hubo errores, redirigimos al home.
            res.redirect('/');
        }
    });
}