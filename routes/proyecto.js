import express from 'express';
import { createProyecto, deleteProyecto, getAllProyectos, getProyectosById } from '../controllers/proyectosController.js';


const router = express.Router();

router.get('/', getAllProyectos);
router.get('/:id', getProyectosById);
//pendiente el update
router.post('/', createProyecto);
router.delete('/:id', deleteProyecto);

export default router;
