import {Habilidad} from '../models/Habilidad.js';
import { validateHabilidad } from '../schemas/shmHabilidad.js';

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
    const result = await validateHabilidad(req.body);
    if(result.error) return result.status(400).json({message: JSON.parse(result.error.message)})
    try {
/*         const { 
            habilidad, 
            portafolioId
        } = req.body; */
        const nuevaHabilidad = {...result.data}
        const habilidad = await Habilidad.create(nuevaHabilidad);
        res.status(201).json(habilidad);
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