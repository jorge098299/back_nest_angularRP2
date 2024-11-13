import { User } from "src/modules/users/entities/user.entity";

export class LoginAuthDto implements User{
    email:string;
    password:string;

}