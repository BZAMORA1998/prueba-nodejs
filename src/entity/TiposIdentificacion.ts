import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({ name: "tbl_tipos_identificacion" })
export class TiposIdentificacion {
  @PrimaryGeneratedColumn({ name: "secuencia_tipo_identificacion"})
  secuenciaTipoIdentificacion: number;

  @Column({ name: "nombre"})
  nombre: string;
}