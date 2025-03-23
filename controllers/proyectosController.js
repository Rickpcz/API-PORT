import { Proyecto } from "../models/proyecto.js";

export const getAllProyectos = async (request, response) =>{
    try {
        const proyectos = await Proyecto.findAll();
        response.json(proyectos);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

export const getProyectosById = async (request, response) => {
    try {
        const proyectos = await Proyecto.findByPk(request.params.id);
        if (!proyectos) return response.status(404).json({ mensaje: "Proyecto no encontrada" });
        response.json(proyectos);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createProyecto = async (request, response) => {
    try {
        const { 
            title, 
            description, 
            portafolio_id, 

        } = request.body;
        // if (!nombre) return response.status(400).json({ mensaje: "El nombre es obligatorio" });

        const nuevoProyecto = await Proyecto.create({ title, description, portafolio_id});
        response.status(201).json(nuevoProyecto);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Actualizar un área
export const updateProyecto = async (request, response) => {
    const proyecto = await Proyecto.findByPk(request.params.id);
    if (!proyecto) {
        return response.status(400).json({message: 'información no disponible'})
    }

    try {
        const {id, titulo, descripcion } = request.body;
        await Proyecto.update(
            {   title: titulo || proyecto.title,
                description: descripcion || proyecto.description
            },
            {where: {id: id}}
        )
    } catch (error) {
        response.status(500).json({error: error.message})
    }
 
}
// Eliminar un área
export const deleteProyecto = async (request, response) => {
    try {
        const proyectos = await Proyecto.findByPk(request.params.id);
        if (!proyectos) return response.status(404).json({ mensaje: "Área no encontrada" });

        await proyectos.destroy();
        response.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
