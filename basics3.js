var marks = Array(6); // create an array of length 6 to store marks

var marks = new Array(20,40,35,12,37,100); // assign values to the marks array

var marks = [20,40,35,12,37,100]; // another way to create and assign values to the marks array

subMarks = marks.slice(2,5); // create a new array containing elements from index 2 to 4
console.log(subMarks); // print the new array containing elements from index 2 to 4

marks[2]; // access the third element of the marks array
console.log(marks[2]); // print the third element of the marks array 35

marks[3] = 14; // assign the value 14 to the fourth element of the marks array
console.log(marks); // print the updated marks array

console.log(marks.length); // print the length of the marks array

marks.push(65); // add a new element to the end of the marks array
console.log(marks); // print the updated marks array after adding a new element

marks.pop(); // remove the last element from the marks array
console.log(marks); // print the updated marks array after removing the last element

marks.shift(); // remove the first element from the marks array
console.log(marks); // print the updated marks array after removing the first element

marks.unshift(50); // add a new element to the beginning of the marks array
console.log(marks); // print the updated marks array after adding a new element to the beginning

marks.splice(2, 1); // remove the element at index 2 from the marks array
console.log(marks); // print the updated marks array after removing the element at index 2 35

console.log(marks.indexOf(100)); // print the index of the element 100 in the marks array 4

console.log(marks.includes(120)); // check if the element 120 is present in the marks array false
console.log(marks.includes(100)); // check if the element 100 is present in the marks array true

subMarks = marks.slice(2,5); // create a new array containing elements from index 2 to 4
console.log(subMarks); // print the new array containing elements from index 2 to 4

var sum = 0;
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]); // print each element of the marks array
    sum = sum + marks[i]; // add each element to the sum
}
console.log(sum); // print the sum of all elements in the marks array

//reduce filter map
let total = marks.reduce((sum, totalMarks) => sum + totalMarks, 0); // calculate the sum of all elements using reduce
console.log(total); // print the sum of all elements using reduce

var scores = [12,13,14,16]
var evenScores = []; // create an empty array to store even numbers from the scores array

// create new array with even numbers from the scores array [12, 14, 16]
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 === 0) {
        evenScores.push(scores[i]); // add each even element to the new array
    }
}
console.log(evenScores); // print the array of even scores
let newFilterEvenScores =scores.filter(score => score % 2 === 0); // create a new array with even numbers from the scores array using filter
console.log(newFilterEvenScores); // print the array of even scores created using filter [12, 14, 16] 

//map

// create new array with even numbers of scores and multiply each value with 3 array [12, 14, 16] => [36, 42, 48] 
let mappedArray = newFilterEvenScores.map(score => score * 3); // create a new array with even numbers of scores multiplied by 3
console.log(mappedArray); // print the new array with even numbers of scores multiplied by 3 [36, 42, 48]

let totalVal = mappedArray.reduce((sum, val) => sum + val, 0); // calculate the sum of all elements in the mapped array using reduce
console.log(totalVal); // print the sum of all elements in the mapped array using reduce

var scores1 = [12,13,14,16];

let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0); // calculate the sum of all even numbers multiplied by 3 in the scores1 array
console.log(sumValue); // print the sum of all even numbers multiplied by 3 in the scores1 array

let fruits =["banana","mango","pomegrante","apple"] 

console.log(fruits.sort()) // print the sorted array of fruits in ascending order
console.log(fruits.reverse()) // print the sorted array of fruits in descending order


var scores1 = [12,003,19,16,14] //9 
console.log(scores1.sort()) // print the sorted array of scores1 in ascending order



 //explicame detenidamente esto: 
 // la función sort() ordena los elementos de un array. Si no se proporciona 
 // una función de comparación, los elementos se convierten a cadenas y se ordenan según el valor Unicode. 
 // Para ordenar números correctamente, se debe proporcionar una función de comparación que determine el orden 
 // de los elementos. En este caso, la función de comparación (a, b) => a - b ordena los números de menor a mayor.
scores1.sort(function(a,b){
    return a-b // compare function for ascending order en español (de menor a mayor) a-b funcionan haciendo que los elementos se ordenen de menor a mayor 
}) // sort the array of scores1 in ascending order using a custom compare function
console.log(scores1) // print the array of scores1 after sorting in ascending order using a custom compare function

console.log(scores1.sort((a,b)=> b-a)) // print the sorted array of scores1 in descending order