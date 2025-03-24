import express from 'express';
import areaRoutes from './area.js';
import userRoutes from './usuario.js';
import contactoRoutes from './contacto.js';
import expRoutes from './experiencia.js';
import portafolioRoutes from './portafolio.js';
import proyectosRoutes from './proyecto.js';
import habilidadRoutes from './habilidad.js';
import herramientaRoutes from './herramienta.js';
const router = express.Router();

router.use('/areas', areaRoutes);
router.use('/users', userRoutes);
router.use('/contactos',  contactoRoutes);
router.use('/experiencias',  expRoutes);
router.use('/portafolios',  portafolioRoutes);
router.use('/proyectos', proyectosRoutes);
router.use('/habilidades',  habilidadRoutes);
router.use('/herramientas',  herramientaRoutes);


export default router;