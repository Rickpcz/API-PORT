import User from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sequelize from '../config/db.js';

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un usuario por ID
export const getUserByUsername = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username } });
        if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un usuario (registro)
export const createUser = async (req, res) => {
    try {
        const { nombre, username, password, area_id,puesto } = req.body;

        if (!nombre || !username || !password) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        const userExists = await User.findOne({ where: { username } });
        if (userExists) return res.status(400).json({ mensaje: "El username ya está en uso" });

        const newUser = await User.create({ nombre, username, password, area_id, puesto });
        res.status(201).json({ mensaje: "Usuario creado correctamente", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un usuario
export const updateUser = async (req, res) => {
    try {
        const { nombre, username, password, area_id } = req.body;
        const user = await User.findByPk(req.params.id);

        if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        user.nombre = nombre || user.nombre;
        user.username = username || user.username;
        if (password) user.password = await bcrypt.hash(password, 10);
        user.area_id = area_id || user.area_id;

        await user.save();
        res.json({ mensaje: "Usuario actualizado correctamente", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        await user.destroy();
        res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Autenticación (Login)
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ mensaje: "Username y password son obligatorios" });

        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const iduser = user.id;

        res.json({ mensaje: "Login exitoso", token, id: iduser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserWithImage = async (req, res) => {
    const userId = req.params.id;

    try {
        const [results] = await sequelize.query(
            'CALL get_user_and_imageuser(:userId)', 
            {
                replacements: { userId },
                type: sequelize.QueryTypes.RAW
            }
        );

        if (!results || results.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json(results);
    } catch (error) {
        console.error('Error al ejecutar SP:', error);
        res.status(500).json({ error: error.message });
    }
};