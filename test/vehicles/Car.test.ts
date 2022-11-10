import { Car } from "@vehicles";

let car: Car;

beforeEach(() => {
    car = new Car('Mobi', 'Fiat', '2022-01-01', 67680);
});

test("Expected getIPVA return expected value", () => {
    expect(car.calculateIPVA()).toBe(2707.20);
});