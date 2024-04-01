const {Schema, model} = require('mongoose')

const InsumosSchema = ({
   
    nombreInsumo: {
        type: String,
        required: true,
        
    },
    medidaInsumo: {
        type: String,
        required: true,
    },

    cantidadInsumo: {
        type: Number,
        required: true,
    },

    valorInsumo: {
        type: Number,
        required: true,
    },
   
    stockInsumo: {
        type: Number,
        required: true,
    },
    stockMaxInsumo: {
        type: Number,
        required: true,

    },
    stockMinInsumo: {
        type: Number,
        required: true,

    },
    iva:{
        type:Number,
        required:true,
    }, 

    estadoInsumo: {
        type: String,
        default: 'activo', // Puedes establecer un valor predeterminado si lo deseas
    }

})


module.exports = model('Insumos', InsumosSchema)