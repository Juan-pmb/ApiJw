const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getAcceso, postAcceso, putAcceso, deleteAcceso } = require('/controllers/Acceso')

route.get('/', getAcceso)

route.post('/', postAcceso)

route.put('/', putAcceso)

route.delete('/', deleteAcceso)
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