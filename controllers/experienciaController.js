import { json } from "sequelize";
import { Experiencia } from "../models/experiencia.js";
import { validateExperiencia } from "../schemas/shmExperiencia.js";

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
        if (!experiencia) return response.status(404).json({ mensaje: "Experiencia no encontrada" });
        response.json(experiencia);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createExperiencia = async (request, response) => {
     const result = await validateExperiencia(request.body)
     if (result.error) {
        return response.status(400).json({message: JSON.parse(result.error.message)})
     }
    try {
        /* const { 
            description, 
            period, 
            company_name, 
            portafolioId
        } = request.body; */
        const nuevaExperiencia = {...result.data}
        
        const nuevaExp = await Experiencia.create(nuevaExperiencia);
        response.status(201).json(nuevaExp);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Actualizar un área
export const updateExperiencia = async (request, response) => {
    const xp = await Experiencia.findByPk(request.params.id);
    if (!xp) {
        return response.status(400).json({message: 'información no disponible'})
    }

    try {
        const {id, descripcion, periodo, empresa } = request.body;
        const updatedExperiencia = await Experiencia.update(
            {   description: descripcion || xp.description,
                period: periodo || xp.period,
                company_name: empresa || xp.company_name  
            },
            {where: {id: id}}
        )

        response.json(updatedExperiencia);
    } catch (error) {
        response.status(500).json({error: error.message})
    }
 
}
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
