import db from '../db/db'
import { UserDto } from '../models/user.model';

export class UserRepo {
    connection: any
    constructor() {
        this.connection = db();
    }

    userNameExist(userName: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let usernameQuery = "SELECT * FROM `Users` WHERE userName = '" + userName + "'";
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

    insertUser(user: UserDto) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO `Users` (firstName, lastName, password, email, userName) VALUES ('" +
                user.firstName + "', '" + user.lastName + "', '" + user.password + "', '" + user.email + "', '" + user.userName + "')";
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

    getUserForLogin(userName: string, password: string): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            console.log("start");
            let userQuery = "SELECT * FROM `Users` WHERE userName = '" + userName + "' AND password = '" + password + "'";
            this.connection.query(userQuery, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                if (result.length > 0) {
                    var user:UserDto = result[0]
                    resolve(user);
                }
                resolve();
            });
        })
    }
}