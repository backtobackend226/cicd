import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  password: string;

  constructor(entity: Partial<User>) {
    Object.assign(this, entity);
  }
}
