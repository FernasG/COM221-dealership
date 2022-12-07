import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import { SystemBilling } from "./Controllers.interface";

export class SystemController extends BaseController {
    public async showSystem(req: Request, res: Response) {
        const stock = this.App.getStock;
        const billing: SystemBilling[] = [];

        stock.forEach(stockItem => {
            const vehicle = stockItem.getVehicle;
            const vehicleName = `${vehicle.getManufacturer} ${vehicle.getModel}`;
            const stockBillPrice = vehicle.calculateIPVA() * stockItem.getQuantity;

            const stockBill = { vehicle: vehicleName, quantity: stockItem.getQuantity, bill: stockBillPrice };
            billing.push(stockBill);
        });

        const total = billing.reduce((acc, current) => { return acc += current.bill; }, 0);

        return res.render('System', { billing, total });
    }
}