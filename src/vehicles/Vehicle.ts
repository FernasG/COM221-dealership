import * as uuid from "uuid";

export abstract class Vehicle {
    private id: string;
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

    get getId() {
        return this.id;
    }

    get getPrice() {
        return this.price;
    }

    get getModel() {
        return this.model;
    }

    get getManufacturer() {
        return this.manufacturer;
    }

    get getManufacturingDate() {
        return this.manufacturing_date;
    }

    set setPrice(price: number) {
        this.price = price;
    }

    set setModel(model: string) {
        this.model = model;
    }

    set setManufacturer(manufacturer: string) {
        this.manufacturer = manufacturer;
    }

    set setManufacturingDate(manufacturing_date: string) {
        this.manufacturing_date = manufacturing_date;
    }

    abstract calcIPVA(): number;
}