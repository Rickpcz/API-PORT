import { cloudinary } from "../config/cloud.js";
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
        if (!portafolio) return response.status(404).json({ mensaje: "Portafolio no encontrada -- img" });
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
        res.status(500).json({ error: error.message,portafolio:'hola' });
    }
};

// Actualizar un área
export const updatePortafolio = async (request, response) => {
    const { id, skills, archievements } = request.body;
    const portafolio = await Portafolio.findByPk(id);
    if (!portafolio) {
        return response.status(400).json({message: 'información no disponible'})
    }

    try {
        
        await Portafolio.update(
            {   skills: skills || portafolio.skills,
                archievements: archievements || portafolio.archievements
            },
            {where: {id: id}}
        );
        response.json({ mensaje: "Portafolio actualizado correctamente" });
    } catch (error) {
        response.status(500).json({error: error.message,portafolio:'hola,crear'})
    }
 
}
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

export const uploadImagePTF = async (request, response) => {
    if (!request.files || !request.files.image) {
        return response.status(400).json({ error: 'No se ha subido ninguna imagen' });
    }

    const id = request.body.id;

    if (!id) {
        return response.status(400).json({ error: 'Falta el ID del portafolio' });
    }

    try {
        const result = await cloudinary.uploader.upload(request.files.image.tempFilePath); // <-- aquí puede fallar
        const imageUrl = result.secure_url;

        await Portafolio.update(
            { imgUser: imageUrl },
            { where: { id } }
        );

        response.json({ success: true, imageUrl });
    } catch (error) {
        console.error('Error subiendo imagen a Cloudinary:', error);
        response.status(500).json({ error: 'error al subir la imagen' });
    }
};

export const getPortafolioByUserId = async (req, res) => {
    try {
        const portafolio = await Portafolio.findOne({ 
            where: { userId: req.params.userId }
        });

        if (!portafolio) {
            return res.status(404).json({ mensaje: "Portafolio no encontrado - img" });
        }

        res.json(portafolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// falta integrar una funcion que al actualizar la img igual la borre el archivo del servicio
//objetivo: optimizar recursos