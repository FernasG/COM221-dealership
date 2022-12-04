import { Observer } from "src/users/Observer";

export abstract class Observable {
    public abstract register(observer: Observer): void;
    public abstract cancelRegister(observer: Observer): void;
    protected abstract notify(oldQuantity: number, quantity: number): void;
}