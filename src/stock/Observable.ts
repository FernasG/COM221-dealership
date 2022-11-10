import { Observer } from "src/users/Observer";

export abstract class Observable {
    protected abstract notify(): void;
    public abstract register(observer: Observer): void;
    public abstract cancelRegister(observer: Observer): void;
}