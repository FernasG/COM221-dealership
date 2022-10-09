import * as uuid from "uuid";

export abstract class Vehicle {
    private id: string;
    private price: number;
    private readonly model: string;
    private readonly manufacturer: string;
    private readonly manufacturing_date: Date;

    constructor(model: string, manufacturer: string, manufacturing_date: Date, price: number) {
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

    abstract calcIPVA(): number;
}