import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export class Test_User {

  @PrimaryGeneratedColumn()
  id

  @Column({ unique: true })
  email

  @Column()
  password

  @Column()
  name
}
