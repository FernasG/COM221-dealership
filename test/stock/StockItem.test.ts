import { Vehicle, Motorcycle } from "@vehicles";
import { StockItem } from "@stock";
import { User } from "@users";

jest.mock('@libraries');

describe('Test StockItem entity', () => {
    let stockItem: StockItem;
    let vehicle: Vehicle;
    let users: User[] = [];

    beforeAll(() => {
        const user = new User('204.636.380-93', 'John Doe', 'john.doe@outlook.com', new Date());
        vehicle = new Motorcycle('FZ25', 'Yamaha', '2022-05-01', 25000);
        users.push(user);
    });

    beforeEach(() => {
        stockItem = new StockItem(vehicle, 10);
        users.forEach(user => stockItem.register(user));
    });

    test("Stock Item should be defined", () => {
        expect(stockItem).toBeDefined();
    });

    test("Stock Item ID should be defined", () => {
        expect(stockItem.getId).toBeDefined();
        expect(stockItem.getId.length).toBe(36);
    });

    test("Should get vehicle", () => {
        expect(stockItem.getVehicle).toEqual(vehicle);
    });

    test("Should get and set quantity", () => {
        expect(stockItem.getQuantity).toEqual(10);

        stockItem.setQuantity = 2;

        expect(stockItem.getQuantity).toEqual(2);
    });

    test("Should get users wishlist", () => {
        expect(Array.from(stockItem.getUsersWishlist)).toEqual(users);
    });

    test("Should cancel user register from Stock Item", () => {
        const user = new User('475.072.360-64', 'Jane Doe', 'jane.doe@yahoo.com', new Date());
        stockItem.register(user);

        expect(stockItem.getUsersWishlist.size).toBe(2);

        stockItem.cancelRegister(user);

        expect(stockItem.getUsersWishlist.size).toBe(1);
    });

    test("Should return JSON view of Stock Item entity", () => {
        const stockItemJSON = stockItem.toJSON();

        expect(stockItemJSON).toBeInstanceOf(Object);
    });
});