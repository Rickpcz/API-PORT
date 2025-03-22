import express from 'express';
import { getAllUsers, getUserByUsername, createUser, updateUser, deleteUser, loginUser } from '../controllers/UsuarioController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:username', getUserByUsername);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', loginUser);

export default router;
