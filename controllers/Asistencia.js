const { response } = require('express');
const Asistencia = require('../models/Asistencia');

const getAsistencia = async (req, res) => {
    // Obtener todas las asistencias de la colección
    const asistencias = await Asistencia.find();
    res.json({ msg: asistencias });
}

const postAsistencia = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        // Instanciar el objeto de asistencia y guardarlo en la base de datos
        const asistencia = new Asistencia(datos);
        await asistencia.save();
        console.log(asistencia);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }

    res.json({ msg: mensaje });
}

const putAsistencia = async (req, res) => {
    const { Documento, Nombre, fecha, Asistio } = req.body;
    let mensaje;

    try {
        // Actualizar la asistencia con los datos proporcionados por el usuario
        const asistencia = await Asistencia.findOneAndUpdate(
            { Documento: Documento },
            {
                Documento: Documento,
                Nombre: Nombre,
                fecha: fecha,
                Asistio: Asistio,
            }
        );
        mensaje = 'Actualización exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

const deleteAsistencia = async (req, res) => {
    const { Documento } = req.body;
    let mensaje;

    try {
        // Eliminar la asistencia con el documento proporcionado
        const asistencia = await Asistencia.findOneAndDelete({ Documento: Documento });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

module.exports = {
    getAsistencia,
    postAsistencia,
    putAsistencia,
    deleteAsistencia
}
