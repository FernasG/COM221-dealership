import { Vehicle } from "@vehicles";

export class StockItem {
    private readonly _vehicle: Vehicle;
    private _quantity: number;

    constructor(vehicle: Vehicle, quantity: number) {
        this._vehicle = vehicle;
        this._quantity = quantity;
    }

    get vehicle() {
        return this._vehicle;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(quantity: number) {
        if (quantity < 0) throw new Error(`Invalid quantity: ${quantity}`);
        this._quantity = quantity;
    }
}