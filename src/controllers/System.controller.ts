import { BaseController } from "./BaseController";
import { Request, Response } from "express";

export class SystemController extends BaseController {
    public async listSystem(req: Request, res: Response) {
        return res.render('System', { });
    }
}