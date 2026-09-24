export {};

// TypeScript infiere el tipo cuando asignamos un valor.
console.log("Hello world");

let a: number = 4;
console.log(a);
console.log(typeof a);

let b: number = 234.6;
console.log(b);
console.log(typeof b);

let c: string = "Miguel Muñoz";
console.log(c);
console.log(typeof c);

let required: boolean = true;
console.log(required);
console.log(typeof required);

// Una variable declarada con let puede recibir otro valor del mismo tipo.
c = (a + b).toString();
console.log(c);

console.log(!required);

// const no permite reasignar el valor.
const language: string = "TypeScript";
console.log(language);

// TypeScript detectaría un error si intentáramos hacer: a = "texto";
