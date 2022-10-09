import { Request, Response, NextFunction } from "express";

export class RequestMiddleware {
    public static request(req: Request, res: Response, next: NextFunction) {
        const date = new Date().toLocaleString('pt-br');
        const { method, originalUrl } = req;
        console.log(`Request [${method}]: ${date} ~ ${originalUrl}`);
        next();
    }
}