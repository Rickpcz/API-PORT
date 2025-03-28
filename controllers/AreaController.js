import Area from '../models/Area.js';
import { validateArea } from '../schemas/shmArea.js';

// Obtener todas las áreas
export const getAllAreas = async (req, res) => {
    try {
        const areas = await Area.findAll();
        res.json(areas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un área por ID
export const getAreaById = async (req, res) => {
    try {
        const area = await Area.findByPk(req.params.id);
        if (!area) return res.status(404).json({ mensaje: "Área no encontrada" });
        res.json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createArea = async (req, res) => {
    try {
        const result = await validateArea(req.body);
        if (result.error) return res.status(400).json({ mensaje: result.error.message });
        const newArea = { ...result.data}
       
        const nuevaArea = await Area.create(newArea);
        res.status(201).json(nuevaArea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un área
export const updateArea = async (req, res) => {
    try {
        const { nombre } = req.body;
        const area = await Area.findByPk(req.params.id);

        if (!area) return res.status(404).json({ mensaje: "Área no encontrada" });

        area.nombre = nombre;
        await area.save();
        res.json({ mensaje: "Área actualizada correctamente", area });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un área
export const deleteArea = async (req, res) => {
    try {
        const area = await Area.findByPk(req.params.id);
        if (!area) return res.status(404).json({ mensaje: "Área no encontrada" });

        await area.destroy();
        res.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
