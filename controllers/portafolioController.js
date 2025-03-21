import { Portafolio } from "../models/portafolio.js";


// get no necesario
export const getAllPortafolios = async (request, response) =>{
    try {
        const portafolios = await Portafolio.findAll();
        response.json(portafolios);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

export const getPortafoliosById = async (request, response) => {
    try {
        const portafolio = await Portafolio.findByPk(request.params.id);
        if (!portafolio) return response.status(404).json({ mensaje: "Portafolio no encontrada" });
        res.json(portafolio);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createPortafolio = async (req, res) => {
    try {
        const { 
            imgUser, 
            skills, 
            archievements, 
            userId, 


        } = req.body;
        // if (!nombre) return res.status(400).json({ mensaje: "El nombre es obligatorio" });

        const nuevoPortafolio = await Portafolio.create({ imgUser, skills, archievements, userId });
        res.status(201).json(nuevoPortafolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un área

// Eliminar un área
export const deletePortafolio = async (req, res) => {
    try {
        const portafolio = await Portafolio.findByPk(req.params.id);
        if (!portafolio) return res.status(404).json({ mensaje: "Área no encontrada" });

        await portafolio.destroy();
        res.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
