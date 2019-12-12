export class UserDto{
    id:number;
    userName:string;
    password:string;
    arch:boolean;
    firstName:string;
    email:string;
    lastName:string;
    token:string;
    constructor(){
        this.id = 0;
        this.userName = "";
        this.firstName = "";
        this.lastName = "";
        this.password = "";
        this.email = "";
        this.token ="";
        this.arch = false;
    }

}