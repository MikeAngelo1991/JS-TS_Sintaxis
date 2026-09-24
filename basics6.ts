// Un objeto puede describirse con una interface.
interface PersonData {
    firstName: string;
    lastName: string;
    age: number;
    fullName: () => void;
    gender?: string;
}

const person: PersonData = {
    firstName: "Tim",
    lastName: "Joe",
    age: 24,
    fullName(): void {
        console.log(this.firstName + this.lastName);
    }
};

person.fullName();
console.log(person.lastName);
console.log(person["lastName"]);

person.firstName = "Tim Dane";
console.log(person.firstName);
person.gender = "male";
console.log(person);
delete person.gender;
console.log(person);
console.log("gender" in person);

for (const key in person) {
    console.log(person[key as keyof PersonData]);
}
