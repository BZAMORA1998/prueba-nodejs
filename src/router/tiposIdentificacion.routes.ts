import {Router,Request,Response,NextFunction} from 'express';
import { getTipoIdentificacionBO, getTiposIdentificacionBO } from '../BO/tiposIdentificacionBO';

const router=Router();


router.get("/tiposIdentificacion",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await getTiposIdentificacionBO());
        } catch (error) {
            return res.send(error);
        }
    }
);

router.get("/tiposIdentificacion/:id",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await getTipoIdentificacionBO(req.params.id));
        } catch (error) {
            return res.send(error);
        }
    }
);

export default router;