import express from 'express';
import { createPortafolio, deletePortafolio, getAllPortafolios, getPortafoliosById, updatePortafolio, uploadImagePTF } from '../controllers/portafolioController.js';


const router = express.Router();

router.get('/', getAllPortafolios);
router.get('/:id', getPortafoliosById);
router.put('/:id', updatePortafolio)
router.post('/', createPortafolio);
router.post('/upload', uploadImagePTF);
router.delete('/:id', deletePortafolio);

export default router;
