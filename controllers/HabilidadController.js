import {Habilidad} from '../models/Habilidad.js';

export const getAllHabilidades = async (req, res) => {
    try {
        const habilidades = await Habilidad.findAll();
        res.json(habilidades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getHabilidadesById = async (req, res) => {
    try {
        const habilidades = await Habilidad.findByPk(req.params.id);
        if (!habilidades) return res.status(404).json({ mensaje: "Habilidad no encontrada" });
        res.json(habilidades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createHabilidad = async (req, res) => {
    try {
        const { 
            habilidad, 
             portafolioId
        } = req.body;
        // if (!nombre) return res.status(400).json({ mensaje: "El nombre es obligatorio" });

        const nuevoHabilidad = await Habilidad.create({ habilidad,  portafolioId });
        res.status(201).json(nuevoHabilidad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un área
export const updateHabilidad = async (req, res) => {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) {
        return res.status(400).json({message: 'información no disponible'})
    }

    try {
        const {id, habilidad, portafolio_id } = req.body;
        const updatedHabilidad = await Habilidad.update(
            {   habilidad: habilidad || habilidad.habilidad,
                portafolioId: portafolio_id || habilidad.portafolio_id
            },
            {where: {id: id}}
        )
        res.json(updatedHabilidad)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
 
}
// Eliminar un área
export const deleteHabilidad = async (req, res) => {
    try {
        const habilidad = await Habilidad.findByPk(req.params.id);
        if (!habilidad) return res.status(404).json({ mensaje: "Área no encontrada" });

        await habilidad.destroy();
        res.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};