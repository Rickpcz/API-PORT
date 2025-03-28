import {Herramienta} from '../models/Herramienta.js';
import { validateHerramienta } from '../schemas/shmHerramienta.js';

export const getAllTools = async (req, res) => {
    try {
        const tools = await Herramienta.findAll();
        res.json(tools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getToolsById = async (req, res) => {
    try {
        const tools = await Herramienta.findByPk(req.params.id);
        if (!tools) return res.status(404).json({ mensaje: "Herramienta no encontrada" });
        res.json(tools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createTool = async (req, res) => {
    const result = await validateHerramienta(req.body);
    if(result.error) return res.status(400).json({message: JSON.parse(result.error.message)})
    try {
       /*  const { 
            herramienta, 
            portafolioId
        } = req.body;
         */
        const nuevaHerramienta = {...result.data};
        const nuevoTool = await Herramienta.create(nuevaHerramienta);
        res.status(201).json(nuevoTool);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un área
export const updateTool = async (req, res) => {
    const tool = await Herramienta.findByPk(req.params.id);
    if (!tool) {
        return res.status(400).json({message: 'información no disponible'})
    }

    try {
        const {id, herramienta, portafolioId } = req.body;
        const updatedTool = await Herramienta.update(
            {
                herramienta: herramienta || tool.herramienta,
                portafolioId : portafolioId || tool.portafolio_id
            },
            {where: {id: id}}
        )
        res.json(updatedTool)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
 
}
// Eliminar un área
export const deleteTool = async (req, res) => {
    try {
        const tool = await Herramienta.findByPk(req.params.id);
        if (!tool) return res.status(404).json({ mensaje: "Área no encontrada" });

        await tool.destroy();
        res.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};