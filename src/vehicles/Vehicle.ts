import * as uuid from "uuid";

export abstract class Vehicle {
    private readonly id: string;
    private price: number;
    private model: string;
    private manufacturer: string;
    private manufacturing_date: string;

    constructor(model: string, manufacturer: string, manufacturing_date: string, price: number) {
        this.id = uuid.v4();
        this.model = model;
        this.price = price;
        this.manufacturer = manufacturer;
        this.manufacturing_date = manufacturing_date;
    }

    public get getId() {
        return this.id;
    }

    public get getPrice() {
        return this.price;
    }

    public get getModel() {
        return this.model;
    }

    public get getManufacturer() {
        return this.manufacturer;
    }

    public get getManufacturingDate() {
        return this.manufacturing_date;
    }

    public set setPrice(price: number) {
        this.price = price;
    }

    public set setModel(model: string) {
        this.model = model;
    }

    public set setManufacturer(manufacturer: string) {
        this.manufacturer = manufacturer;
    }

    public set setManufacturingDate(manufacturing_date: string) {
        this.manufacturing_date = manufacturing_date;
    }

    abstract calcIPVA(): number;
}