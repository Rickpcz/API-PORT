import express from 'express';
import { createPortafolio, deletePortafolio, getAllPortafolios, getPortafoliosById } from '../controllers/portafolioController.js';


const router = express.Router();

router.get('/', getAllPortafolios);
router.get('/:id', getPortafoliosById);
//pendiente el update
router.post('/', createPortafolio);
router.delete('/:id', deletePortafolio);

export default router;
