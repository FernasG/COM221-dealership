import { StockItem } from "src/stock/StockItem";
import { Vehicle } from "@vehicles";
import { Users } from "@users/Users";

export default class Application {
    private static instance: Application;
    private readonly vehicles: Set<Vehicle>;
    private readonly stock: Set<StockItem>;
    private readonly users: Set<Users>;

    private constructor() {
        this.vehicles = new Set<Vehicle>();
        this.stock = new Set<StockItem>();
        this.users = new Set<Users>();
    }

    public static get getInstance(): Application {
        if (!Application.instance) Application.instance = new Application();

        return Application.instance;
    }

    public get getStock() {
        return Array.from(this.stock);
    }

    public get getVehicles() {
        return Array.from(this.vehicles);
    }

    public get getUsers() {
        return Array.from(this.users);
    }

    public insertVehicle(vehicle: Vehicle) {
        this.vehicles.add(vehicle);
    }

    public insertStockItem(stockItem: StockItem) {
        this.stock.add(stockItem);
    }

    public removeVehicle(vehicle: Vehicle) {
        this.vehicles.delete(vehicle);
    }

    public removeStockItem(stockItem: StockItem) {
        this.stock.delete(stockItem);
    }
}
