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

// export const getUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const results = await getRepository(User).findOne(req.params.id);
//   return res.json(results);
// };

// export const createUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const newUser = await getRepository(User).create(req.body);
//   const results = await getRepository(User).save(newUser);
//   return res.json(results);
// };

// export const updateUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const user = await getRepository(User).findOne(req.params.id);
//   if (user) {
//     getRepository(User).merge(user, req.body);
//     const results = await getRepository(User).save(user);
//     return res.json(results);
//   }

//   return res.json({msg: 'Not user found'});
// };

// export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
//   const results = await getRepository(User).delete(req.params.id);
//   return res.json(results);
// };
