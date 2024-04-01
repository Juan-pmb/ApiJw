const {response} = require('express');
const Insumos = require('../models/Insumos');

const getInsumos = async (req, res) => {
    // Obtener todas las exportaciones de la colección
    const insumos = await Insumos.find();
    res.json({ msg: insumos });
}

const postInsumos = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        // Instanciar el objeto de asistencia y guardarlo en la base de datos
        const insumos = new Insumos(datos);
        await insumos.save();
        console.log(insumos);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }

    res.json({ msg: mensaje });
}

const putInsumos = async (req, res) => {
    const { nombreInsumo, medidaInsumo, cantidadInsumo, valorInsumo, stockInsumo, stockMaxInsumo, stockMinInsumo, iva, estadoInsumo } = req.body;
    let mensaje;

    try {
        // Actualizar la asistencia con los datos proporcionados por el usuario
        const insumos = await Insumos.findOneAndUpdate(
            { nombreInsumo: nombreInsumo },
            {
                nombreInsumo: nombreInsumo,
                medidaInsumo: medidaInsumo,
                cantidadInsumo: cantidadInsumo,
                valorInsumo : valorInsumo,
                stockInsumo : stockInsumo,
                stockMaxInsumo : stockMaxInsumo, 
                stockMinInsumo : stockMinInsumo,
                iva : iva,
                estadoInsumo :estadoInsumo,
            }
        );
        mensaje = 'Actualización exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

const deleteInsumos = async (req, res) => {
    const { nombreInsumo } = req.body;
    let mensaje;

    try {
        // Eliminar la asistencia con el documento proporcionado
        const insumos = await Insumos.findOneAndDelete({ nombreInsumo: nombreInsumo });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({ msg: mensaje });
}

module.exports = {
    getInsumos,
    postInsumos,
    putInsumos,
    deleteInsumos
}
