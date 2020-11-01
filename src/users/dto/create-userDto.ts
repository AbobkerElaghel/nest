import UserType from "../interfaces/user.interface";

export class userDto implements UserType {
    constructor(name: string, username: string, password: string){
        this.name = name;
        this.username = username;
        this.password = password;
    }
    name?: string;
    username: string;
    password: string;
};