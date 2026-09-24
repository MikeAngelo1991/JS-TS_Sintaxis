export {};

const flag: boolean = true;

if (!flag) {
    console.log("condition satisfied");
} else {
    console.log(flag);
    console.log("condition not satisfied");
}

let i: number = 0;
while (i > 10) {
    i++;
    console.log(i);
}

do {
    i++;
} while (i > 10);
console.log(i);

console.log("**********************************************");

let n: number = 0;
for (let k: number = 1; k <= 100; k++) {
    if (k % 2 === 0 && k % 5 === 0) {
        n++;
        console.log("Multiplos de 2 y 5: " + k);
        if (n === 3) {
            break;
        }
    }
}
console.log("Total multiplos de 2 y 5: " + n);

console.log("**********************************************");
for (let k: number = 0; k <= 10; k++) {
    console.log("Until 10 " + k);
}

console.log("**********************************************");
let required: boolean = true;
while (required) {
    console.log(required);
    required = false;
}
