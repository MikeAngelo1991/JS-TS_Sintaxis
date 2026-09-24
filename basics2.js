const flag = true;

if (!flag) {
    console.log("condition satisfied");
}
else {
    console.log(flag);
    console.log("condition not satisfied");
}

let i = 0;
while (i>10) {
    i++; // i= i+1
    console.log(i);
} // only one couse the condition is false initially or initial value of i is not greater than 10

do{
    i++; 
}while(i>10);
console.log(i); // final value of i after do-while loop // don't start

//from 1 to 10 give me common multiple values of 2 and 5
console.log("**********************************************")

let n = 0;
for(let k=1; k<=100; k++) {
    if(k % 2 === 0 && k % 5 === 0) { // && and logical AND operator || logical OR operator Module of 2 and 5
        n++; // increment the count of multiples found
        console.log("Multiplos de 2 y 5: " + k);
        if(n === 3) {
            break; // only the 3 multiples of 2 and 5
        }
    }
}
console.log("Total multiplos de 2 y 5: " + n);

console.log("**********************************************")
for(let k=0; k<=10; k++) {
    console.log(" Until 10 " + k);
}

console.log("**********************************************")
let required = true;
while (required) {
    console.log(required);
    required = false; // to prevent infinite loop
} 