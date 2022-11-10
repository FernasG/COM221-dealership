import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
    public calculateIPVA(): number {
        const IPVA = (this.getPrice * 0.02).toFixed(2);

        return Number(IPVA);
    }
}