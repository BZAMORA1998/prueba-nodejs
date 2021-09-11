import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class TiposIdentificacion {
  @PrimaryGeneratedColumn()
  secuaencia_tipo_identificacion: number;

  @Column()
  nombre: string;
}