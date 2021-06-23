import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity("users")  

class User {

  @PrimaryColumn()
  readonly id: String;

  @Column()
  name: String;
  
  @Column()
  email: String;
  
  @Column()
  admin: Boolean;

  @CreateDateColumn()
    create_at: Date;

  @UpdateDateColumn()
    updated_at: Date;


  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

 }

export {User};
  