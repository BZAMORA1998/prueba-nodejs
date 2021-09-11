import {Router} from 'express';

const router=Router();

import {getTipoIdentificacion, getTiposIdentificacion} from "../controllers/tiposIdentificacion.controller"

router.get("/tiposIdentificacion",getTiposIdentificacion);
router.get("/tiposIdentificacion/:id",getTipoIdentificacion);

export default router;