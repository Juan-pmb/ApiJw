const {router, Router}=require('express')

const route = Router()


const {getPedidos, postPedidos,putPedidos, deletePedidos} = require('../controllers/Pedidos')//importando el controlador

   //listar todos los datos
/*    route.get('/',(req, res)=>{
        res.json({
            msg:'GET'
        })
 
    })
    */
 //consultar dato
    route.get('/', getPedidos) 
      

    route.post('/', postPedidos)  

    route.put('/', putPedidos)  

    route.delete('/', deletePedidos)  


//     route.post('/',(req, res) =>{
//         const {documento,nombre,apellidos}=req.query
//         aprendices.push({
//             "documento":documento,
//             "nombre":nombre,
//             "apellidos":apellidos
//         })
//         res.json({
//             msg:aprendices
//         })

//     })//insertar datos
  
//     route.delete('/',(req, res) =>{
//         //implementa la logica
  
//     res.json({
//         msg:'eliminacion exitosa'
//     })
//    })
   module.exports = route


