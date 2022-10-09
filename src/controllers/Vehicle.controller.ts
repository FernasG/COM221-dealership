import { BaseController } from "./BaseController";
import { Request, Response } from "express";
import { Car, Motorcycle } from "@vehicles";

export class VehicleController extends BaseController {
    public async createVehicle(req: Request, res: Response) {
        const { model, manufacturer, manufacturing_date, price, quantity } = req.body;

        const vehicle = new Car(model, manufacturer, new Date(manufacturing_date), price);

        this.App.insertVehicle(vehicle, quantity);

        return res.status(201).json({ message: 'Vehicle created.', vehicle });
    }


    public async findVehicle(req: Request, res: Response) {
        const { id } = req.params;

        const vehicle = this.App.getStock.find(item => { return item.vehicle.getId === id });

        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found.' });

        return res.status(200).json({ vehicle });
    }

    public async listVehicles(req: Request, res: Response) {
        const vehicles = this.App.getStock.map(item => { return item.vehicle });

        return res.render('Vehicles', { vehicles });
    }
}