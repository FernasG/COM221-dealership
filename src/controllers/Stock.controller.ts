import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import { HttpStatus } from "./Controllers.interface";
import { StockItem } from "@stock";

export class StockController extends BaseController {
    public async listStock(req: Request, res: Response) {
        const { type } = req.query;

        const stock = this.App.getStock;

        if (type && type === 'json') return res.status(200).json({ stock });

        const users = this.App.getUsers;
        const vehicles = this.App.getVehicles;

        return res.render('Stock', { stock, users, vehicles });
    }

    public async findStockItem(req: Request, res: Response) {
        const { id } = req.params;

        const stockItem = this.App.getStock.find(stockItem => { return stockItem.getId === id });

        if (!stockItem) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Stock Item not found.' });

        return res.status(HttpStatus.OK).json({ stockItem });
    }

    public async createStock(req: Request, res: Response) {
        const { vehicleId, quantity, users } = req.body

        if (!vehicleId || !quantity) return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Invalid request.' });

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === vehicleId; });

        if (!vehicle) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Vehicle not found.' });

        const stockItem = new StockItem(vehicle, quantity);

        if (Array.isArray(users) && users.length) {
            for (const userId of users) {
                const user = this.App.getUsers.find((user) => { return user.getId === userId; });

                if (!user) continue;

                stockItem.register(user);
            }
        }

        this.App.insertStockItem(stockItem);

        return res.status(HttpStatus.CREATED).json({ message: 'Stock Item created.', stockItem });
    }

    public async deleteStockItem(req: Request, res: Response) {
        const { id } = req.params;

        const stockItem = this.App.getStock.find(stockItem => { return stockItem.getId === id });

        if (!stockItem) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Stock Item not found.' });

        this.App.removeStockItem(stockItem);

        res.status(200).json({ message: 'Stock Item deleted.' });
    }

    public async updateStockItem(req: Request, res: Response) {
        const { id, quantity } = req.body;

        const stockItem = this.App.getStock.find(stockItem => { return stockItem.getId === id });

        if (!stockItem) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Stock Item not found.' });

        if (quantity) stockItem.setQuantity = quantity;

        return res.status(HttpStatus.OK).json({ message: 'Stock Item updated.' });
    }
}