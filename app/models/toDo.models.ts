export class ToDoDto{
    id:number;
    userId:number
    title:string;
    note:string;
    arch:boolean;
    done:boolean;

    constructor(){
        this.id = 0;
        this.userId = 0;
        this.title = "";
        this.note = "";
        this.done = false;
        this.arch = false;
    }

}