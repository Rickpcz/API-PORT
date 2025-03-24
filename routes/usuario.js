import express from 'express';
import { getAllUsers, getUserByUsername, createUser, updateUser, deleteUser, loginUser,getUserWithImage,getUserById,getAllUserData } from '../controllers/UsuarioController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/username/:username', getUserByUsername);
router.get('/with-image/:id', getUserWithImage);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', loginUser);
router.get('/alldata/:id', getAllUserData);

export default router;
