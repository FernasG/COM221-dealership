import { Observer } from "src/users/Observer";

export abstract class Observable {
    abstract notify(): Promise<void>;
    abstract register(observer: Observer): void;
    abstract cancelRegister(observer: Observer): void;
}