import express from 'express';
import { createExperiencia, deleteExperiencia, getAllExperiencias, getExperienciaById } from '../controllers/experienciaController.js';


const router = express.Router();

router.get('/', getAllExperiencias);
router.get('/:id', getExperienciaById);
//pendiente el update
router.post('/', createExperiencia);
router.delete('/:id', deleteExperiencia);

export default router;
