import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
    public calcIPVA(): number {
        return this.getPrice * 0.02;
    }
}