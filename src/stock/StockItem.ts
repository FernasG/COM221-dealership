import { Observable } from "./Observable";
import { Observer } from "src/users/Observer";
import { Vehicle } from "@vehicles";
import * as uuid from "uuid";

export class StockItem extends Observable {
    private readonly id: string;
    private readonly vehicle: Vehicle;
    private readonly usersWishlist: Set<Observer>;
    private quantity: number;

    constructor(vehicle: Vehicle, quantity: number) {
        super();
        this.id = uuid.v4();
        this.vehicle = vehicle;
        this.quantity = quantity;
        this.usersWishlist = new Set<Observer>();
    }

    public get getId() {
        return this.id;
    }

    public get getVehicle() {
        return this.vehicle;
    }

    public get getQuantity() {
        return this.quantity;
    }

    public get getUsersWishlist() {
        return this.usersWishlist;
    }

    public set setQuantity(quantity: number) {
        if (quantity < 0) throw new Error(`Invalid quantity: ${quantity}`);
        this.quantity = quantity;
    }

    public async notify(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public register(observer: Observer): void {
        this.usersWishlist.add(observer);
    }

    public cancelRegister(observer: Observer): void {
        this.usersWishlist.delete(observer);
    }
}