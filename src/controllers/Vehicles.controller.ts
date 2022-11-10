import { VehicleFactory, VehicleType, VehicleContent } from "@factory";
import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import { HttpStatus } from "./Controllers.interface";

export class VehiclesController extends BaseController {
    private readonly vehicleFactory: VehicleFactory = new VehicleFactory();

    public async listVehicles(req: Request, res: Response) {
        const { type } = req.query;

        const vehicles = this.App.getVehicles;

        if (type && type === 'json') return res.status(200).json({ vehicles });

        return res.render('Vehicles', { vehicles });
    }

    public async findVehicle(req: Request, res: Response) {
        const { id } = req.params;

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === id });

        if (!vehicle) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Vehicle not found.' });

        return res.status(HttpStatus.OK).json({ vehicle });
    }

    public async createVehicle(req: Request, res: Response) {
        const { model, manufacturer, manufacturing_date, price, type } = req.body;

        if (!Object.keys(VehicleType).includes(type)) return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Invalid request.' });

        const vehicleContent: VehicleContent = { model, manufacturer, manufacturing_date, price };

        const vehicle = this.vehicleFactory.createVehicle(type, vehicleContent);

        if (!vehicle) return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to create vehicle.' });

        this.App.insertVehicle(vehicle);

        return res.status(HttpStatus.CREATED).json({ message: 'Vehicle created.', vehicle });
    }

    public async deleteVehicle(req: Request, res: Response) {
        const { id } = req.params;

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === id });

        if (!vehicle) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Vehicle not found.' });

        const stockItems = this.App.getStock.filter(stockItem => { return stockItem.getVehicle.getId === vehicle.getId; });

        stockItems.forEach(stockItem => this.App.removeStockItem(stockItem));

        this.App.removeVehicle(vehicle);

        res.status(200).json({ message: 'Vehicle deleted.' });
    }

    public async updateVehicle(req: Request, res: Response) {
        const { id, model, manufacturer, manufacturing_date, price } = req.body;

        const vehicle = this.App.getVehicles.find(vehicle => { return vehicle.getId === id });

        if (!vehicle) return res.status(HttpStatus.NOT_FOUND).json({ message: 'Vehicle not found.' });

        if (model) vehicle.setModel = model;
        if (manufacturing_date) vehicle.setManufacturingDate = manufacturing_date;
        if (manufacturer) vehicle.setManufacturer = manufacturer;
        if (price) vehicle.setPrice = price;

        return res.status(HttpStatus.OK).json({ message: 'Vehicle updated.' });
    }
}