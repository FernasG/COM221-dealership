import { VehicleContent, VehicleMap, VehicleType } from "./Factory.interface";
import { Vehicle } from "@vehicles";

export class VehicleFactory {
    public createVehicle(type: VehicleType, vehicle: VehicleContent): Vehicle | null {
        if (!Object.keys(VehicleMap).includes(type)) return null;

        const VehicleClass = VehicleMap[type];

        const { model, manufacturer, manufacturing_date, price } = vehicle;

        return new VehicleClass(model, manufacturer, manufacturing_date, price);
    };
}