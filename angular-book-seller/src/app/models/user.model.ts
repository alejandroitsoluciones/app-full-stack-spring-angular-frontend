import { Role } from "./role.enum";

export class User {

    id: number | undefined;
    name: string = "";
    username: string = "";
    password: string = "";
    token: string = "";
    role: Role = Role.USER;
    
}