const { Schema, model } = require('mongoose');

const AccesoSchema = new Schema({
    usuario: {
        type: String,
        unique: true,
        required: [true, 'El usuario es necesario']
    },
    clave: {
        type: String, // Aquí corregí "password" por "String"
        required: [true, 'La clave es requerida']
    }
});

module.exports = model('Acceso', AccesoSchema);
