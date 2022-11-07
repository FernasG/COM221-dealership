import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    public calcIPVA(): number {
        return this.getPrice * 0.04;
    }
}