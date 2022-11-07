import { Observer } from "./Observer";
import * as uuid from "uuid";

export class User extends Observer {
    private readonly id: string;
    private readonly cpf: string;
    private name: string;
    private email: string;
    private birthdate: Date;

    constructor(cpf: string, name: string, email: string, birthdate: Date) {
        super();
        this.id = uuid.v4();
        this.cpf = cpf;
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
    }

    public get getId() {
        return this.id;
    }

    public get getCpf() {
        return this.cpf;
    }

    public get getName() {
        return this.name;
    }

    public get getEmail() {
        return this.email;
    }

    public get getBirthdate() {
        return this.birthdate;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setEmail(email: string) {
        this.email = email;
    }

    public set setBirthdate(birthdate: Date) {
        this.birthdate = birthdate;
    }

    public async update(quantity: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}