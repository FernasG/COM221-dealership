export abstract class Observer {
    abstract update(vehicleName: string, oldQuantity: number, quantity: number): Promise<void>;
}