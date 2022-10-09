import uuid from "uuid";

export class Users {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _email: string;

    constructor(name: string, email: string) {
        this._id = uuid.v4();
        this._name = name;
        this._email = email;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }
}