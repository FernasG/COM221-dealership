import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    public calculateIPVA(): number {
        const IPVA = (this.getPrice * 0.04).toFixed(2);

        return Number(IPVA);
    }
}