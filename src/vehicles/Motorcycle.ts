import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
    calcIPVA(): number {
        return this.getPrice * 0.02;
    }
}