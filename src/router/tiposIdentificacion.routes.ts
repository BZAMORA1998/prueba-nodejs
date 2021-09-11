import {Router,Request,Response} from 'express';
import { deleteTipoIdentificacionBO, getTipoIdentificacionBO, getTiposIdentificacionBO, postTipoIdentificacionBO, putTipoIdentificacionBO } from '../bo/tiposIdentificacionBO';
import { Response200, Response400 } from '../dto/Response';

const router=Router();


router.get("/tiposIdentificacion",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await Response200("OK",await getTiposIdentificacionBO()));
        } catch (error) {
            return res.send(await Response400(error,null));
        } 
    }
);

router.get("/tiposIdentificacion/:id",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await Response200("OK",await getTipoIdentificacionBO(req.params.id)));
        } catch (error) {
            return res.send(await Response400(error,null));
        } 
    }
);

router.post("/tiposIdentificacion",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await Response200("OK",await postTipoIdentificacionBO(req.body)));
        } catch (error) {
            return res.send(await Response400(error,null));
        } 
    }
);

router.put("/tiposIdentificacion",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await Response200("OK",await putTipoIdentificacionBO(req.body)));
        } catch (error) {
            return res.send(await Response400(error,null));
        } 
    }
);

router.delete("/tiposIdentificacion/:id",
    async (req: Request
        , res: Response) => {
        try{
            return res.send(await Response200("OK",await deleteTipoIdentificacionBO(req.params.id)));
        } catch (error) {
            return res.send(await Response400(error,null));
        } 
    }
);

export default router;