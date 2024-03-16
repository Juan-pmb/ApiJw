const {Schema, model} = require('mongoose')

const ExportacionesSchema = ({
   
    Producto:{   
        type: String,
        unique: true,
        required:[true, 'El producto es necesario']
    },
    Kilos: {
        type:Number,
        required:[true, 'El nombre de la servicios es requerida']
    },
    precioKilos:{
        type:Number,
        required:[true, ' el precio de los kilos  es requerido']
    }
})


module.exports = model('Exportaciones', ExportacionesSchema)