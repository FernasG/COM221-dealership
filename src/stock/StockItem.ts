import { Vehicle } from "@vehicles";
import * as uuid from "uuid";

export class StockItem {
    private readonly id: string;
    private readonly vehicle: Vehicle;
    private quantity: number;

    constructor(vehicle: Vehicle, quantity: number) {
        this.id = uuid.v4();
        this.vehicle = vehicle;
        this.quantity = quantity;
    }

    get getId() {
        return this.id;
    }

    get getVehicle() {
        return this.vehicle;
    }

    get getQuantity() {
        return this.quantity;
    }

    set setQuantity(quantity: number) {
        if (quantity < 0) throw new Error(`Invalid quantity: ${quantity}`);
        this.quantity = quantity;
    }
}