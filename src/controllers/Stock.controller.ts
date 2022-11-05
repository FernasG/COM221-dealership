import { BaseController } from "./BaseController";
import { Request, Response } from "express";
import { HttpStatus } from "./Controllers.interface";
import { StockItem } from "@stock";

export class StockController extends BaseController {
    public async listStock(req: Request, res: Response) {
        const stock = this.App.getStock;
        const vehicles = this.App.getVehicles;

        return res.render('Stock', { stock, vehicles });
    }

    public async createStock(req: Request, res: Response) {
        const { vehicleId, quantity } = req.body

        if (!vehicleId || !quantity) return res.status(HttpStatus.BAD_REQUEST).json({ message: '' });

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === vehicleId; });

        if (!vehicle) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Vehicle not found.' });

        const stockItem = new StockItem(vehicle, quantity);

        this.App.insertStockItem(stockItem);

        return res.status(HttpStatus.CREATED).json({ message: 'Stock Item created.', stockItem });
    }
}