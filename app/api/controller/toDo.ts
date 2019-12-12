import express = require('express');
import app from '../../app';
import { CommonRes } from '../../common/commonRespond';
import { UserDto } from '../../models/user.model';
import { UserRepo } from '../../db/userRepo';
import { ToDoRepo } from '../../db/toDoRepo';
import { ToDoDto } from '../../models/toDo.models';

export class ToDoController {

    toDoRepo: ToDoRepo;
    constructor() {
        this.toDoRepo = new ToDoRepo();
    }

    public update = (req: any, res: any) => {
        const id = parseInt(req.params.id, 10);
        if (id <= 0)
            return CommonRes.badRequest(res, "id is required");
        if (!req.body.userId)
            return CommonRes.badRequest(res, "userId is required");
        else if (!req.body.title) {
            return CommonRes.badRequest(res, "title is required");
        }


        let toDo = new ToDoDto()
        toDo.id = id;
        toDo.userId = req.body.userId;
        toDo.title = req.body.title;
        toDo.note = req.body.note;

        this.toDoRepo.editToDo(toDo).then(data => {
            return res.status(201).send(toDo);
        }, error => CommonRes.badRequest(res, "Error when edit toDo"));
    }

    public remove = (req: any, res: any) => {
        const id = parseInt(req.params.id, 10);
        if (id <= 0)
            return CommonRes.badRequest(res, "id is required");

        this.toDoRepo.removeToDo(id).then(data => {
            return res.status(200).send({
                success: 'true',
                message: 'todo remove successfully'
            })
        }, error => CommonRes.badRequest(res, "Error when remove toDo"));
    }

    public create = (req: any, res: any) => {
        console.log(req.body)
        if (!req.body.userId)
            return CommonRes.badRequest(res, "userId is required");
        else if (!req.body.title) {
            return CommonRes.badRequest(res, "title is required");
        }

        let toDo = new ToDoDto()
        toDo.userId = req.body.userId;
        toDo.title = req.body.title;
        toDo.note = req.body.note;

        this.toDoRepo.insertToDo(toDo).then(data => {
            return res.status(201).send(toDo)
        }, error => CommonRes.badRequest(res, "Error when insert toDo"));
    }

    public confirm = (req: any, res: any) => {
        const id = parseInt(req.params.toDoId, 10);
        if (id <= 0)
            return CommonRes.badRequest(res, "id is required");

        this.toDoRepo.confirmToDo(id).then(data => {
            this.toDoRepo.getSingle(id).then(result => {
                return res.status(201).send(result);
            })
        }, error => CommonRes.badRequest(res, "Error when confirm toDo"));
    }

    public unconfirm = (req: any, res: any) => {
        const id = parseInt(req.params.toDoId, 10);
        if (id <= 0)
            return CommonRes.badRequest(res, "id is required");

            this.toDoRepo.unconfirmToDo(id).then(data => {
                this.toDoRepo.getSingle(id).then(result => {
                    return res.status(201).send(result);
                })
            }, error => CommonRes.badRequest(res, "Error when confirm toDo"));
        }

    public getForUser = (req: any, res: any) => {
        const userId = parseInt(req.params.userId, 10);
        if (!userId)
            return CommonRes.badRequest(res, "userId is required");

        this.toDoRepo.getToDoForUser(userId).then(data => {
            return res.status(201).send(data);
        }, error => CommonRes.badRequest(res, "Error when get toDo for user"));
    }
}

