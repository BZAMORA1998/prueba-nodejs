import {Router} from 'express';

const router=Router();

import {getTiposIdentificacion} from "../controllers/tiposIdentificacion.controller"

router.get("/tiposIdentificacion",getTiposIdentificacion);

export default router;