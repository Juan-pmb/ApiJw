const {response} = require('express');
const Exportaciones = require('../models/Exportaciones');

const getExportaciones = async (req, res) => {
    // Obtener todas las exportaciones de la colección
    const exportaciones = await Exportaciones.find();
    res.json({ msg: exportaciones });
}

const postExportaciones = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        // Instanciar el objeto de asistencia y guardarlo en la base de datos
        const exportaciones = new Exportaciones(datos);
        await exportaciones.save();
        console.log(exportaciones);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }

    res.json({ msg: mensaje });
}

const putExportaciones = async (req, res) => {
    const { Producto, Kilos, precioKilos } = req.body;
    let mensaje;

    try {
        // Actualizar la asistencia con los datos proporcionados por el usuario
        const exportaciones = await exportaciones.findOneAndUpdate(
            { Producto: Producto },
            {
                Producto: Producto,
                Kilos: Kilos,
                precioKilos: precioKilos,
            }
        );
        mensaje = 'Actualización exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

const deleteExportaciones = async (req, res) => {
    const { Producto } = req.body;
    let mensaje;

    try {
        // Eliminar la asistencia con el documento proporcionado
        const exportaciones = await Exportaciones.findOneAndDelete({ Producto: Producto });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

module.exports = {
    getExportaciones,
    postExportaciones,
    putExportaciones,
    deleteExportaciones
}
