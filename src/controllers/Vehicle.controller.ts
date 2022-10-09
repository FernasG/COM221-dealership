import { Request, Response } from "express";
import { Car, Motorcycle } from "@vehicles";
import Application from "@application";

export class VehicleController {
    private readonly App: Application;

    constructor() {
        this.App = Application.getInstance;
    }

    public createVehicle(req: Request, res: Response) {
        const { model, manufacturer, manufacturing_date, price, quantity } = req.body;

        const vehicle = new Car(model, manufacturer, new Date(manufacturing_date), price);

        this.App.insertVehicle(vehicle, quantity);

        res.status(201).json({ message: 'Vehicle created.', vehicle });
    }
}