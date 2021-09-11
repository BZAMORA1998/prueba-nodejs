import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TiposIdentificacion } from "../entity/TiposIdentificacion";

export const getTiposIdentificacionDAO = async (
): Promise<any> => {
  return await getRepository(TiposIdentificacion).find();
};

export const getTipoIdentificacionDAO = async (
  id:number
): Promise<any> => {
  return await getRepository(TiposIdentificacion).findOne(id);
};

// export const postTipoIdentificacionDAO = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const newTiposIdentificacion = await getRepository(TiposIdentificacion).create(req.body);
//   const results = await getRepository(TiposIdentificacion).save(newTiposIdentificacion);
//   return res.json(results);
// };

// export const putTipoIdentificacionDAO = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const tiposIdentificacion = await getRepository(TiposIdentificacion).findOne(req.params.id);
//   if (tiposIdentificacion) {
//     getRepository(TiposIdentificacion).merge(tiposIdentificacion, req.body);
//     const results = await getRepository(TiposIdentificacion).save(tiposIdentificacion);
//     return res.json(results);
//   }

//    return res.json({msg: 'Not user found'});
//  };

// export const deleteTipoIdentificacionDAO = async (req: Request, res: Response): Promise<Response> => {
//   const results = await getRepository(TiposIdentificacion).delete(req.params.id);
//   return res.json(results);
// };
