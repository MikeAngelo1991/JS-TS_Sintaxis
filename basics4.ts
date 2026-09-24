export {};

// TypeScript permite declarar los tipos de parámetros y del resultado.
const greet: string = "Evening";

if (1 === 1) {
    const afternoonGreeting: string = "Afternoon";
    console.log(afternoonGreeting);
}

function add(a: number, b: number): number {
    const morningGreeting: string = "Morning";
    console.log(morningGreeting);
    return a + b;
}

const sum: number = add(2, 3);
console.log(sum);
console.log(greet);

// Una función anónima también puede tener tipos explícitos.
const sumOfIntegers = function (c: number, d: number): number {
    return c + d;
};

const sumOfNumbers = (c: number, d: number): number => c + d;

console.log(sumOfIntegers(4, 5));
console.log(sumOfNumbers(2, 3));
