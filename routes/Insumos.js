const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getInsumos, postInsumos, putInsumos, deleteInsumos} = require('../controllers/Insumos')

route.get('/', getInsumos)

route.post('/', postInsumos)

route.put('/', putInsumos)

route.delete('/', deleteInsumos)
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