import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TiposIdentificacion } from "../entity/TiposIdentificacion";

export const getTiposIdentificacion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tiposIdentificacion = await getRepository(TiposIdentificacion).find();
  return res.json(tiposIdentificacion);
};

export const getTipoIdentificacion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(TiposIdentificacion).findOne(req.params.id);
  return res.json(results);
};

export const postTipoIdentificacion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTiposIdentificacion = await getRepository(TiposIdentificacion).create(req.body);
  const results = await getRepository(TiposIdentificacion).save(newTiposIdentificacion);
  return res.json(results);
};

export const putTipoIdentificacion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tiposIdentificacion = await getRepository(TiposIdentificacion).findOne(req.params.id);
  if (tiposIdentificacion) {
    getRepository(TiposIdentificacion).merge(tiposIdentificacion, req.body);
    const results = await getRepository(TiposIdentificacion).save(tiposIdentificacion);
    return res.json(results);
  }

   return res.json({msg: 'Not user found'});
 };

export const deleteTipoIdentificacion = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(TiposIdentificacion).delete(req.params.id);
  return res.json(results);
};
