//Importamos clases/modulos usados en la clase/componente.
const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//Ruta para el Home. Definimos que componente cargar para la ruta especificada.
router.get('/', (req, res)=>{
    //Llamada a la BD. Query para traer todos los registros de la tabal Alumno.
    conexion.query('SELECT * FROM Alumno', (error, results)=>{
        if (error) {
            throw error;
        } else {
            //Si no hay errores, renderizamos el componente "index".
            res.render('index', {results:results});
        }
    })
});

router.get('/create', (req, res)=>{
    //Renderizamos el componente "create".
    res.render('create');
});

//Ruta para edit. Definimos que componente cargar para la ruta especificada. 
//Se toma de la ruta el Id como parametro para la llamada a la BD.
router.get('/edit/:id', (req, res)=>{
    //Instanciamos una const para guardar el Id.
    const id = req.params.id;
    //Llamada a la BD. Query para obtener de la tabla Alumno el registro con el Id recibido.
    conexion.query('SELECT * FROM Alumno WHERE id =?',[id], (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.render('edit', {alumno:results[0]});
        }
    })
});

//Ruta para delete. Definimos que componente cargar para la ruta especificada. 
//Se toma de la ruta el Id como parametro para la llamada a la BD.
router.get('/delete/:id', (req, res)=>{
    //Instanciamos una const para guardar el Id.
    const id = req.params.id;
    //Llamada a la BD. Query para eliminar de la tabla Alumno el registro con el Id recibido.
    conexion.query('DELETE FROM Alumno WHERE id = ?', [id], (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        } 
    })
})

//Referencia a el archivo "crud".
const crud = require('./controllers/crud');
//Llamada HTTP POST para el metodo save de "crud".
router.post('/save', crud.save);
//Llamada HTTP POST para el metodo update de "crud".
router.post('/update', crud.update);

//Exportamos la clase/componentes router para que sea visible y utilizable para las otras clases/componentes.
module.exports = router;