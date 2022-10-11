import { BaseController } from "./BaseController";
import { Request, Response } from "express";
import { Car, Motorcycle } from "@vehicles";

export class VehicleController extends BaseController {
    public async listVehicles(req: Request, res: Response) {
        const vehicles = this.App.getVehicles;

        return res.render('Vehicles', { vehicles });
    }

    public async findVehicle(req: Request, res: Response) {
        const { id } = req.params;

        const vehicle = this.App.getStock.find(item => { return item.vehicle.getId === id });

        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found.' });

        return res.status(200).json({ vehicle });
    }

    public async createVehicle(req: Request, res: Response) {
        const { model, manufacturer, manufacturing_date, price } = req.body;

        const vehicle = new Car(model, manufacturer, manufacturing_date, price);

        this.App.insertVehicle(vehicle);

        return res.status(201).json({ message: 'Vehicle created.', vehicle });
    }

    public async deleteVehicle(req: Request, res: Response) {
        const { id } = req.params;

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === id });

        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found.' });

        this.App.removeVehicle(vehicle);

        res.status(200).json({ message: 'Vehicle deleted' });
    }

    public async updateVehicle(req: Request, res: Response) {
        const { id, model, manufacturer, manufacturing_date, price } = req.body;

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === id });

        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found.' });

        if (model) vehicle.setModel = model;
        if (manufacturing_date) vehicle.setManufacturingDate = manufacturing_date;
        if (manufacturer) vehicle.setManufacturer = manufacturer;
        if (price) vehicle.setPrice = price;

        return res.status(200).json({ message: 'Vehicle updated.' });
    }
}