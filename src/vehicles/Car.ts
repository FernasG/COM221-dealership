import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    calcIPVA(): number {
        return this.price * 0.04;
    }
}