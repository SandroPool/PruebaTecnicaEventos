import { Router } from 'express';
import IndexController from '../controllers/index.controller.js';
const router = Router();

router.get('/campus', IndexController.obtenerCampus);
router.get('/espacios', IndexController.obtenerEspacios);
router.get('/docentes', IndexController.obtenerDocentes);


export default router;
