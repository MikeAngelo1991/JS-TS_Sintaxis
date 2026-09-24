import Person from "./basics7";

// Pet hereda las propiedades y métodos de Person.
class Pet extends Person {
    get location(): string {
        return "BlueCross";
    }

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

const pet: Pet = new Pet("sam", "san");
pet.fullName();
console.log(pet.location);
