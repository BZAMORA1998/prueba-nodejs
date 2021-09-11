import { getTipoIdentificacionDAO, getTiposIdentificacionDAO } from "../DAO/tiposIdentificacionDAO";

export const getTiposIdentificacionBO = async (
) : Promise<any> => {
  return await getTiposIdentificacionDAO();
};

export const getTipoIdentificacionBO = async (
  id:any
  ) : Promise<any> => {
    return await getTipoIdentificacionDAO(id);
  };

