import express from 'express';
import { createContacto, deleteContacto, getAllContactos, getContactoById } from '../controllers/contactoController.js';


const router = express.Router();

router.get('/', getAllContactos);
router.get('/:id', getContactoById);
//pendiente el update
router.post('/', createContacto);
router.delete('/:id', deleteContacto);

export default router;
