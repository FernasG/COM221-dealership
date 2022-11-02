import { Car, Motorcycle } from "@vehicles";

export enum VehicleType {
    Car = "Car",
    Motorcycle = "Motorcycle"
}

export const VehicleMap = {
    Car: Car,
    Motorcycle: Motorcycle
}

export interface VehicleContent {
    model: string;
    manufacturer: string;
    manufacturing_date: string;
    price: number;
}
