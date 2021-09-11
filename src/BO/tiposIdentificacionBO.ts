import { deleteTipoIdentificacionDAO, getTipoIdentificacionDAO, getTiposIdentificacionDAO, postTipoIdentificacionDAO, putTipoIdentificacionDAO } from "../dao/tiposIdentificacionDAO";

export const getTiposIdentificacionBO = async (
) : Promise<any> => {
  return await getTiposIdentificacionDAO();
};

export const getTipoIdentificacionBO = async (
  id:any
  ) : Promise<any> => {
    return await getTipoIdentificacionDAO(id);
  };


  export const postTipoIdentificacionBO = async (
    body:any
    ) : Promise<any> => {

      if(body.nombre==null)
        throw "El nombre es obligatorio";

      return await postTipoIdentificacionDAO(body);
    };
  

    export const putTipoIdentificacionBO = async (
      body:any
      ) : Promise<any> => {
  
        if(body.secuenciaTipoIdentificacion==null)
          throw "El secuenciaTipoIdentificacion es obligatorio";

        if(body.nombre==null)
          throw "El nombre es obligatorio";
  
        return await putTipoIdentificacionDAO(body);
      };


      export const deleteTipoIdentificacionBO = async (
        id:any
        ) : Promise<any> => {
    
          if(id==null)
            throw "El id es obligatorio";
  
          return await deleteTipoIdentificacionDAO(id);
        };
    
  