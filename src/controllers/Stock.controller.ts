import { BaseController } from "./BaseController";
import { Request, Response } from "express";

export class StockController extends BaseController {
    public async listStock(req: Request, res: Response) {
        const stock = this.App.getStock;

        return res.render('Stock', { stock });
    }    
}