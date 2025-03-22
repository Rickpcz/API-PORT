import { Experiencia } from "../models/experiencia.js";

export const getAllExperiencias = async (request, response) =>{
    try {
        const experiencias = await Experiencia.findAll();
        response.json(experiencias);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

export const getExperienciaById = async (request, response) => {
    try {
        const experiencia = await Experiencia.findByPk(request.params.id);
        if (!experiencia) return response.status(404).json({ mensaje: "Contacto no encontrada" });
        response.json(experiencia);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createExperiencia = async (request, response) => {
    try {
        const { 
            description, 
            period, 
            company_name, 
            portafolio_id
        } = request.body;
        // if (!nombre) return response.status(400).json({ mensaje: "El nombre es obligatorio" });

        const nuevaExp = await Experiencia.create({ description, period, company_name,portafolio_id});
        response.status(201).json(nuevaExp);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Actualizar un área

// Eliminar un área
export const deleteExperiencia = async (request, response) => {
    try {
        const experiencia = await Experiencia.findByPk(request.params.id);
        if (!experiencia) return response.status(404).json({ mensaje: "Área no encontrada" });

        await experiencia.destroy();
        response.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
