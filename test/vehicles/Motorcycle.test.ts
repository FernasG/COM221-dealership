import { Motorcycle } from "@vehicles";

describe('Test Motorcycle entity', () => {
    let motorcycle: Motorcycle;

    beforeEach(() => {
        motorcycle = new Motorcycle('CG Titan 160', 'Honda', '2023-01-01', 20000);
    });

    test("Expected getIPVA return expected value", () => {
        expect(motorcycle.calculateIPVA()).toBe(400);
    });
});