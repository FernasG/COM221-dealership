import { Vehicle, Car } from "@vehicles";

describe('Test Vehicle entity', () => {
    let vehicle: Vehicle;

    beforeEach(() => {
        vehicle = new Car('Palio', 'Fiat', '2004-05-01', 10000);
    });

    test("Vehicle should be defined", () => {
        expect(vehicle).toBeDefined();
    });

    test("Vehicle ID should be defined", () => {
        expect(vehicle.getId).toBeDefined();
        expect(vehicle.getId.length).toBe(36);
    });

    test("Should get and set model", () => {
        expect(vehicle.getModel).toBe('Palio');

        vehicle.setModel = 'Camaro';

        expect(vehicle.getModel).toBe('Camaro');
    });

    test("Should get and set manufacturer", () => {
        expect(vehicle.getManufacturer).toBe('Fiat');

        vehicle.setManufacturer = 'Nissan';

        expect(vehicle.getManufacturer).toBe('Nissan');
    });

    test("Should get and set price", () => {
        expect(vehicle.getPrice).toBe(10000);

        vehicle.setPrice = 5000;

        expect(vehicle.getPrice).toBe(5000);
    });

    test("Should get and set manufacturing date", () => {
        expect(vehicle.getManufacturingDate).toBe('2004-05-01');

        vehicle.setManufacturingDate = '2007-08-02';

        expect(vehicle.getManufacturingDate).toBe('2007-08-02');
    });
});