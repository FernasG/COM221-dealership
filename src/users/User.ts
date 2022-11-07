import * as uuid from "uuid";

export class User {
    private readonly id: string;
    private readonly cpf: string;
    private name: string;
    private email: string;
    private birthdate: Date;

    constructor(cpf: string, name: string, email: string, birthdate: Date) {
        this.id = uuid.v4();
        this.cpf = cpf;
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
    }

    get getId() {
        return this.id;
    }

    get getCpf() {
        return this.cpf;
    }

    get getName() {
        return this.name;
    }

    get getEmail() {
        return this.email;
    }

    get getBirthdate() {
        return this.birthdate;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setEmail(email: string) {
        this.email = email;
    }

    set setBirthdate(birthdate: Date) {
        this.birthdate = birthdate;
    }
}