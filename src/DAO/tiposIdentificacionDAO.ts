import { Request, Response } from "express";
import { getRepository, IsNull } from "typeorm";
import { TiposIdentificacion } from "../entity/TiposIdentificacion";
import { getManager } from 'typeorm';

export const getTiposIdentificacionDAO = async (
): Promise<any> => {
  //const entityManager = getManager();
  return await getRepository(TiposIdentificacion).find();

  // var a=await entityManager.query("SELECT * from tbl_tipos_identificacion a");

  // a.forEach((e: any) => console.log(e));
  // return a;
};

export const getTipoIdentificacionDAO = async (
  id:number
): Promise<any> => {
  return await getRepository(TiposIdentificacion).findOne(id);
};

export const postTipoIdentificacionDAO = async (
  body:any
): Promise<any> => {
  const newTiposIdentificacion = await getRepository(TiposIdentificacion).create(body);
  let results = await getRepository(TiposIdentificacion).save(newTiposIdentificacion);
  return results;
};

export const putTipoIdentificacionDAO = async (
  body:any
): Promise<any> => {
  const tiposIdentificacion = await getRepository(TiposIdentificacion).findOne(body.secuenciaTipoIdentificacion);
  if (tiposIdentificacion) {
    getRepository(TiposIdentificacion).merge(tiposIdentificacion,body);
    let results = await getRepository(TiposIdentificacion).save(tiposIdentificacion);
    return results;
  }

   throw "Secuencia tipo de identificacion no existe";
 };

export const deleteTipoIdentificacionDAO = async (
  id:any
  ): Promise<any> => {
  const results = await getRepository(TiposIdentificacion).delete(id);
  return null;
};
