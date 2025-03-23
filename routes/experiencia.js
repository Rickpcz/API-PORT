import express from 'express';
import { createExperiencia, deleteExperiencia, getAllExperiencias, getExperienciaById, updateExperiencia } from '../controllers/experienciaController.js';


const router = express.Router();

router.get('/', getAllExperiencias);
router.get('/:id', getExperienciaById);
router.put('/:id', updateExperiencia)
router.post('/', createExperiencia);
router.delete('/:id', deleteExperiencia);

export default router;
