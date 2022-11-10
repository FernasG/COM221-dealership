import { Car } from "@vehicles";

test("Create car and expect to be defined", () => {
    const car = new Car('Palio', 'Fiat', '2004-05-01', 10000);

    expect(car).toBeDefined();
});