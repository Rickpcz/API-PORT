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
            portafolioId, 
            imgproject
        } = request.body;
        // if (!nombre) return response.status(400).json({ mensaje: "El nombre es obligatorio" });

        const nuevoProyecto = await Proyecto.create({ title, description, portafolioId,imgproject});
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
        const {id, titulo, descripcion,imgproject } = request.body;
        const updatedProyecto = await Proyecto.update(
            {   title: titulo || proyecto.title,
                description: descripcion || proyecto.description,
                imgproject: imgproject || proyecto.imgproject
            },
            {where: {id: id}}
        )
        response.json(updatedProyecto);
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


export const uploadImagePTF = async (request, response) => {
    if (!request.files || !request.files.image) {
        return response.status(400).json({ error: 'No se ha subido ninguna imagen' });
    }

    const id = request.body.id;

    if (!id) {
        return response.status(400).json({ error: 'Falta el ID del portafolio' });
    }

    try {
        const result = await cloudinary.uploader.upload(request.files.image.tempFilePath);
        const imageUrl = result.secure_url;

        await Proyecto.update(
            { imgproject: imageUrl },
            { where: { id } }
        );

        response.json({ success: true, imageUrl });
    } catch (error) {
        console.error('Error subiendo imagen a Cloudinary:', error);
        response.status(500).json({ error: 'error al subir la imagen' });
    }
};