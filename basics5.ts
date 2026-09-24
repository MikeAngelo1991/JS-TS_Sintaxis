import Person from "./basics7";

let day: string = "tuesday ";
console.log(day.length);

let subDay: string = day.slice(0, 4);
console.log(subDay);
console.log(day[1]);

let splitDay: string[] = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date: string = "23";
let nextDate: string = "27";
let diff: number = parseInt(nextDate, 10) - parseInt(date, 10);
console.log(diff);
console.log(diff.toString());

let newQuote: string = day + "is Funday day";
console.log(newQuote);
let value: number = newQuote.indexOf("day", 5);
console.log(value);

let count: number = 0;
value = newQuote.indexOf("day");
while (value !== -1) {
    count++;
    value = newQuote.indexOf("day", value + 1);
}
console.log(count);

const person: Person = new Person("Chris", "Edward");
person.fullName();
