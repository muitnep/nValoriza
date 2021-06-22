import {Entity} from "typeorm";

@Entity("users")  

class User {

  id: String;

  name: String;

  email: String;

  admin: String;

  create_at: String;

  update_at: String;
  
 }

export {User};
  