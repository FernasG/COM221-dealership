import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    public calculateIPVA(): number {
        return this.getPrice * 0.04;
    }
}