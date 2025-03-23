import express from 'express';
import { createProyecto, deleteProyecto, getAllProyectos, getProyectosById, updateProyecto } from '../controllers/proyectosController.js';


const router = express.Router();

router.get('/', getAllProyectos);
router.get('/:id', getProyectosById);
router.put('/:id', updateProyecto)
router.post('/', createProyecto);
router.delete('/:id', deleteProyecto);

export default router;
