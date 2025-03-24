import express from 'express';
import { createHabilidad, deleteHabilidad, getAllHabilidades, getHabilidadesById, updateHabilidad } from '../controllers/HabilidadController.js';


const router = express.Router();

router.get('/', getAllHabilidades);
router.get('/:id', getHabilidadesById);
router.put('/:id', updateHabilidad)
router.post('/', createHabilidad);
router.delete('/:id', deleteHabilidad);

export default router;