import uuid from "uuid";

export abstract class Vehicle {
    private _id: string;
    private _price: number;
    private readonly _model: string;
    private readonly _manufacturer: string;
    private readonly _manufacturing_date: Date;

    constructor(model: string, manufacturer: string, manufacturing_date: Date, price: number) {
        this._id = uuid.v4();
        this._model = model;
        this._price = price;
        this._manufacturer = manufacturer;
        this._manufacturing_date = manufacturing_date;
    }

    get id() {
        return this._id;
    }

    get price() {
        return this._price;
    }

    get model() {
        return this._model;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    get manufacturing_date() {
        return this._manufacturing_date;
    }

    set price(price: number) {
        this._price = price;
    }

    abstract calcIPVA(): number;
}