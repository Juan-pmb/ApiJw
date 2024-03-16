const {Schema, model} = require('mongoose')

const asistenciaSchema = ({
    Documento:{   
        type: Number,
        unique: true,
        required:[true, 'El id de la servicios  es necesaria']
    },

    Nombre: {
        type:String,
        required:[true, 'El nombre de la servicios es requerida'],
    },
    fecha:{
        type:String,
        required:[true, 'La fecha de inicio de la servicios es requeriad'],
    },
    Asistio: {
        type: Boolean,
        required: [false, 'La fecha de inicio de la servicios es requeriad'],
    }

})


module.exports = model('Asistencia', asistenciaSchema)