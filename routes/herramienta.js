import express from 'express';
import { createTool, deleteTool, getAllTools, getToolsById, updateTool } from '../controllers/HerramientaController.js';


const router = express.Router();

router.get('/', getAllTools);
router.get('/:id', getToolsById);
router.put('/:id', updateTool)
router.post('/', createTool);
router.delete('/:id', deleteTool);


export default router;