export abstract class Observer {
    abstract update(quantity: number): Promise<void>;
}