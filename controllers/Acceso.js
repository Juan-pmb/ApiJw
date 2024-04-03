const {response} = require('express');
const Acceso = require('/models/Acceso');

const getAcceso = async (req, res) => {
    // Obtener todas las exportaciones de la colección
    const acceso = await Acceso.find();
    res.json({ msg: acceso });
}

const postAcceso  = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        // Instanciar el objeto de asistencia y guardarlo en la base de datos
        const acceso = new Acceso(datos);
        await acceso.save();
        console.log(acceso);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }

    res.json({ msg: mensaje });
}

const putAcceso = async (req, res) => {
    const { usuario, clave} = req.body;
    let mensaje;

    try {
        // Actualizar la asistencia con los datos proporcionados por el usuario
        const acceso = await Acceso.findOneAndUpdate(
            { usuario: usuario },
            {
                usuario: usuario,
                clave: clave,
              
            }
        );
        mensaje = 'Actualización exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

const deleteAcceso = async (req, res) => {
    const { usuario } = req.body;
    let mensaje;

    try {
        // Eliminar la asistencia con el documento proporcionado
        const acceso = await Acceso.findOneAndDelete({ usuario: usuario });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

module.exports = {
    getAcceso,
    postAcceso,
    putAcceso,
    deleteAcceso
}