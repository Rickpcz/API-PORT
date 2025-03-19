import express from 'express';
import areaRoutes from './area.js';
import userRoutes from './usuario.js';
const router = express.Router();

router.use('/areas', areaRoutes);
router.use('/users', userRoutes);


export default router;