const  {response} =require('express');
const Pedidos = require('../models/Pedidos');

const getPedidos = async(req, res) =>{


    const pedidos = await Pedidos.find();//obteniendo los datos de la coleccion
     res.json({
        msg: pedidos
     })

}

const postPedidos = async(req, res) => {
    const datos= req.body //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const pedidos = new Pedidos(datos)//instaciar el objeto
        await pedidos.save()//guardar la base de datos
        console.log(pedidos)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putPedidos = async(req, res) =>{
    const {numPedido,nombreCliente,direccionEnvio,totalPago,formaPago,residencia }=req.body //desestructurar

try{
        const pedidos = await Pedidos.findOneAndUpdate({nombreCliente:nombreCliente},{numPedido:numPedido,direccionEnvio:direccionEnvio, totalPago:totalPago,formaPago:formaPago, residencia:residencia})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
const deletePedidos = async (req, res) => {
    const { nombreCliente } = req.body;
    let mensaje;

    try {
        // Eliminar la asistencia con el documento proporcionado
        const pedidos = await Pedidos.findOneAndDelete({ nombreCliente: nombreCliente });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}
module.exports={
    getPedidos,
    postPedidos,
    putPedidos,
    deletePedidos
}
