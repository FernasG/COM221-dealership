export abstract class Observer {
    abstract update(oldQuantity: number, quantity: number): Promise<void>;
}