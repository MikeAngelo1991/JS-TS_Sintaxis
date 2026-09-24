export default class Person {
    age: number = 25;
    firstName: string;
    lastName: string;

    get location(): string {
        return "canada";
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(): void {
        console.log(this.firstName + this.lastName);
    }
}

// Ejemplo de uso:
// const person: Person = new Person("Tim", "Joseph");
// console.log(person.age);
// console.log(person.location);
// person.fullName();
