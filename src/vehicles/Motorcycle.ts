import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
    public calculateIPVA(): number {
        return this.getPrice * 0.02;
    }
}