const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getExportaciones, postExportaciones, putExportaciones, deleteExportaciones } = require('../controllers/Exportaciones')

route.get('/', getExportaciones)

route.post('/', postExportaciones)

route.put('/', putExportaciones)

route.delete('/', deleteExportaciones)
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