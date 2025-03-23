import express from 'express';
import { createContacto, deleteContacto, getAllContactos, getContactoById, updateContacto } from '../controllers/contactoController.js';


const router = express.Router();

router.get('/', getAllContactos);
router.get('/:id', getContactoById);
router.put('/:id', updateContacto)
router.post('/', createContacto);
router.delete('/:id', deleteContacto);

export default router;
