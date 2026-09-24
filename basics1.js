console.log("Hello world");

let a=4;
console.log(a);
console.log(typeof(a)); // number 

let b = 234.6;
console.log(b);
console.log(typeof(b));

let c = "Miguel Muñoz";
console.log(c);
console.log(typeof(c)); // 

let required = true;
console.log(required);
console.log(typeof(required)); // boolean 
//null and undefined
// let c= a+b; // this would cause an error if c was declared with let previously //we cannot redeclare variable with let keyword but possible with var

c = a+b; // reassigning the value of c is allowed with let
// var c=a+b (this is also allowed and would not cause an error even if c was declared previously with let)
console.log(c);

console.log(!required); // negation of the boolean value



//var (let , const) ES6 var // Var indica que la variable puede ser redeclarada y reasignada
//let indica que la variable puede ser reasignada pero no redeclarada
//const indica que la variable no puede ser ni reasignada ni redeclarada


//these are comments one line
/*
ascasa
asdasd

all the comments withing this block
*/
