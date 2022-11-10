import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import { HttpStatus } from "./Controllers.interface";
import { User } from "@users";

export class UsersController extends BaseController {
    public async listUsers(req: Request, res: Response) {
        const { type } = req.query;

        const users = this.App.getUsers;

        if (type && type === 'json') return res.status(200).json({ users });

        return res.render('Users', { users });
    }

    public async findUser(req: Request, res: Response) {
        const { id } = req.params;

        const user = this.App.getUsers.find(user => { return user.getId === id });

        if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found.' });

        return res.status(HttpStatus.OK).json({ user });
    }

    public async createUser(req: Request, res: Response) {
        const { cpf, name, email, birthdate } = req.body;

        if (!cpf || !name || !email || !birthdate) return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Invalid request.' });

        const user = new User(cpf, name, email, birthdate);

        this.App.inserUser(user);

        return res.status(HttpStatus.CREATED).json({ message: 'User created.', user });
    }

    public async deleteUser(req: Request, res: Response) {
        const { id } = req.params;

        const user = this.App.getUsers.find(user => { return user.getId === id });

        if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found.' });

        this.App.removeUser(user);

        res.status(200).json({ message: 'User deleted.' });
    }

    public async updateUser(req: Request, res: Response) {
        const { id, name, email, birthdate } = req.body;

        const user = this.App.getUsers.find(user => { return user.getId === id });

        if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found.' });

        if (name) user.setName = name;
        if (email) user.setEmail = email;
        if (birthdate) user.setBirthdate = birthdate;

        return res.status(HttpStatus.OK).json({ message: 'User updated.' });
    }
}