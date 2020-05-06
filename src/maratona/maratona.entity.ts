import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Maratona { 
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  aula: string; 
}