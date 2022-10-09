import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
    calcIPVA(): number {
        return this.price * 0.02;
    }
}