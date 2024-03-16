const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getAsistencia, postAsistencia, putAsistencia, deleteAsistencia } = require('../controllers/Asistencia')

route.get('/', getAsistencia)

route.post('/', postAsistencia)

route.put('/', putAsistencia)

route.delete('/', deleteAsistencia)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 