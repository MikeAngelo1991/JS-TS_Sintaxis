export {};

// El tipo number permite enteros y decimales.
let marks: number[] = [20, 40, 35, 12, 37, 100];

let subMarks: number[] = marks.slice(2, 5);
console.log(subMarks);

console.log(marks[2]);
marks[3] = 14;
console.log(marks);
console.log(marks.length);

marks.push(65);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.unshift(50);
console.log(marks);
marks.splice(2, 1);
console.log(marks);

console.log(marks.indexOf(100));
console.log(marks.includes(120));
console.log(marks.includes(100));

subMarks = marks.slice(2, 5);
console.log(subMarks);

let sum: number = 0;
for (let i: number = 0; i < marks.length; i++) {
    console.log(marks[i]);
    sum += marks[i];
}
console.log(sum);

// TypeScript conoce que reduce recibe y devuelve números.
let total: number = marks.reduce((sum: number, mark: number) => sum + mark, 0);
console.log(total);

let scores: number[] = [12, 13, 14, 16];
let evenScores: number[] = [];

for (let i: number = 0; i < scores.length; i++) {
    if (scores[i] % 2 === 0) {
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);

let filteredEvenScores: number[] = scores.filter((score: number) => score % 2 === 0);
console.log(filteredEvenScores);

let mappedArray: number[] = filteredEvenScores.map((score: number) => score * 3);
console.log(mappedArray);

let totalValue: number = mappedArray.reduce((sum: number, value: number) => sum + value, 0);
console.log(totalValue);

let sumValue: number = scores
    .filter((score: number) => score % 2 === 0)
    .map((score: number) => score * 3)
    .reduce((sum: number, value: number) => sum + value, 0);
console.log(sumValue);

let fruits: string[] = ["banana", "mango", "pomegranate", "apple"];
console.log(fruits.sort());
console.log(fruits.reverse());

let scores1: number[] = [12, 3, 19, 16, 14];
console.log(scores1.sort((first: number, second: number) => second - first));
