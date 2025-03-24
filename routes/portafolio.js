import express from 'express';
import { createPortafolio, deletePortafolio, getAllPortafolios, getPortafoliosById, updatePortafolio, uploadImagePTF,getPortafolioByUserId } from '../controllers/portafolioController.js';


const router = express.Router();

router.get('/', getAllPortafolios);
router.get('/:id', getPortafoliosById);
router.put('/update', updatePortafolio)
router.post('/', createPortafolio);
router.post('/upload', uploadImagePTF);
router.delete('/:id', deletePortafolio);
router.get('/usuario/:userId', getPortafolioByUserId);

export default router;
