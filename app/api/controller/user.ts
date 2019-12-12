import express = require('express');
import app from '../../app';
import { CommonRes } from '../../common/commonRespond';
import { UserDto } from '../../models/user.model';
import { UserRepo } from '../../db/userRepo';

export class UserController {

    userRepo: UserRepo;
    constructor() {
        this.userRepo = new UserRepo();
    }

    public login = (req: any, res: any) => {
        if (!req.body.userName)
            return CommonRes.badRequest(res, "userName is required");
        else if (!req.body.password) {
            return CommonRes.badRequest(res, "password is required");
        }
        this.userRepo.getUserForLogin(req.body.userName,req.body.password).then(data =>{
            data.token = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
              });

              return res.status(201).send(data)
        })
    }

    public registration = (req: any, res: any) => {
        console.log(req.body)
        if (!req.body.userName)
            return CommonRes.badRequest(res, "userName is required");
        else if (!req.body.password) {
            return CommonRes.badRequest(res, "password is required");
        }

        let user = new UserDto()
        user.password = req.body.password;
        user.lastName = req.body.lastName;
        user.firstName = req.body.firstName;
        user.email = req.body.email;
        user.userName = req.body.userName;
        
        this.userRepo.userNameExist(user.userName).then(data => {
            if (data == true)
                return CommonRes.badRequest(res, "Already exist user with this userName");
            else {
                this.userRepo.insertUser(user).then(data => {
                    return res.status(201).send({
                        success: 'true',
                        message: 'todo added successfully',
                        user
                    })
                }, error => CommonRes.badRequest(res, "Error when insert user"))
            }
        }, error => CommonRes.badRequest(res, "Error when insert user"));
    }
}

