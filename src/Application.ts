import { StockItem } from "src/stock/StockItem";
import { Vehicle } from "@vehicles";

export default class Application {
    private static instance: Application;
    private readonly stock: StockItem[];

    private constructor() {
        this.stock = [];
    }

    public static get getInstance(): Application {
        if (!Application.instance) Application.instance = new Application();

        return Application.instance;
    }

    public insertVehicle(vehicle: Vehicle, quantity: number) {
        this.stock.push(new StockItem(vehicle, quantity));
    }
}
