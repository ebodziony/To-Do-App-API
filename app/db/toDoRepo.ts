import db from '../db/db'
import { UserDto } from '../models/user.model';
import { ToDoDto } from '../models/toDo.models';

export class ToDoRepo {
    connection: any
    constructor() {
        this.connection = db();
    }

    getSingleToDo(toDoId:number):Promise<ToDoDto>{
        return new Promise((resolve, reject) =>{
            let sql = "SELECT * FROM 'ToDos' WHERE id =" + toDoId
            this.connection.query(sql,(err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                if (result.length > 0) {
                    var toDo:ToDoDto = result[0]
                    resolve(toDo);
                    return;
                }
                reject();
            });
        });
    }

    removeToDo(toDoId: number) {
        return new Promise((resolve, reject) => {
            let usernameQuery = "Update `ToDos` SET arch = true WHERE id = " +toDoId + "";
            this.connection.query(usernameQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log(result);
                if (result.length > 0) {
                    resolve(true);
                }
                resolve(false);
            });
        })
    }

    editToDo(toDo: ToDoDto) {
        return new Promise((resolve, reject) => {
            console.log(toDo.id);
            let usernameQuery = "Update `ToDos` SET note ='"+toDo.note+"', title = '"+toDo.title+"' WHERE id = " +toDo.id + "";
            this.connection.query(usernameQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log(result);
                if (result.length > 0) {
                    resolve(true);
                }
                resolve(false);
            });
        })
    }

    insertToDo(toDo: ToDoDto) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO `ToDos` (userId, title, note) VALUES (" +
                toDo.userId + ", '" + toDo.title + "', '" + toDo.note + "')";
            this.connection.query(query, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject();
                    return;
                }
                resolve();
            });
        });
    }

    confirmToDo(toDoId: number) {
        return new Promise((resolve, reject) => {
            let confirmQuery = "Update `ToDos` SET done=true  WHERE id = " + toDoId;
            this.connection.query(confirmQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject();
                    return;
                }
                resolve();
            });
        });
    }

    unconfirmToDo(toDoId: number) {
        return new Promise((resolve, reject) => {
            let confirmQuery = "Update `ToDos` SET done=false  WHERE id = " + toDoId;
            this.connection.query(confirmQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject();
                    return;
                }
                resolve();
            });
        });
    }

    getSingle(toDoId: number) {
        return new Promise((resolve, reject) => {
            console.log("start");
            let userQuery = "SELECT * FROM `ToDos` WHERE id =" + toDoId + " AND arch = false";
            this.connection.query(userQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                if (result.length > 0) {

                    var user: ToDoDto = result
                    resolve(user);
                    return;
                }
                reject();
            });
        })
    }

    getToDoForUser(userId: number): Promise<Array<UserDto>> {
        return new Promise((resolve, reject) => {
            console.log("start");
            let userQuery = "SELECT * FROM `ToDos` WHERE userId =" + userId + " AND arch = false";
            this.connection.query(userQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                if (result.length > 0) {

                    var user:Array<UserDto> = result
                    resolve(user);
                    return;
                }
                reject();
            });
        })
    }
}