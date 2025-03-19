import express from 'express';
import areaRoutes from './area.js';

const router = express.Router();

router.use('/areas', areaRoutes);


export default router;