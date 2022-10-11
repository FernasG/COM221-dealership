import { BaseController } from "./BaseController";
import { Request, Response } from "express";

export class UsersController extends BaseController {
    public async listUsers(req: Request, res: Response) {
        const users = this.App.getUsers;

        return res.render('Users', { users });
    }
}