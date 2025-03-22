import { Contacto } from "../models/contacto.js";

export const getAllContactos = async (request, response) =>{
    try {
        const contactos = await Contacto.findAll();
        response.json(contactos);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

export const getContactoById = async (request, response) => {
    try {
        const contacto = await Contacto.findByPk(request.params.id);
        if (!contacto) return response.status(404).json({ mensaje: "Contacto no encontrada" });
        res.json(contacto);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// Crear una nueva área
export const createContacto = async (req, res) => {
    try {
        const { 
            user_id, 
            telefono, 
            linkedin, 
            github, 
            correo 

        } = req.body;
        // if (!nombre) return res.status(400).json({ mensaje: "El nombre es obligatorio" });

        const nuevoContacto = await Contacto.create({ user_id, telefono, linkedin,github, correo });
        res.status(201).json(nuevoContacto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un área

// Eliminar un área
export const deleteContacto = async (req, res) => {
    try {
        const contacto = await Contacto.findByPk(req.params.id);
        if (!contacto) return res.status(404).json({ mensaje: "Área no encontrada" });

        await contacto.destroy();
        res.json({ mensaje: "Área eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
