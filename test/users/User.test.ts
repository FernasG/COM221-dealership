import { User } from "@users";

let user: User;

beforeEach(() => {
    user = new User('409.133.470-94', 'John Doe', 'john.doe@gmail.com', new Date('1995-08-07'));
});

test("User should be defined", () => {
    expect(user).toBeDefined();
});

test("User ID should be defined", () => {
    expect(user.getId).toBeDefined();
    expect(user.getId.length).toBe(36);
});

test("Should get CPF", () => {
    expect(user.getCpf).toBe('409.133.470-94');
});

test("Should get and set name", () => {
    expect(user.getName).toBe('John Doe');

    user.setName = 'Jane Doe';

    expect(user.getName).toBe('Jane Doe');
});

test("Should get and set email", () => {
    expect(user.getEmail).toBe('john.doe@gmail.com');

    user.setEmail = 'jane.doe@outlook.com';

    expect(user.getEmail).toBe('jane.doe@outlook.com');
});

test("Should get and set birthdate", () => {
    expect(user.getBirthdate.toString()).toBe(new Date('1995-08-07').toString());

    user.setBirthdate = new Date('2000-05-01');

    expect(user.getBirthdate.toString()).toBe(new Date('2000-05-01').toString());
});
