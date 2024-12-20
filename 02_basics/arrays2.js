const tmkocChar = ['jethalal','champaklal','mehta','daya','bhide'];
const tapusena = ['Tapu','sonu','goli','pinku','gogi'];

// tmkocChar.push(tapusena);
// console.log(tmkocChar);
// console.log(tmkocChar[5][2]);//goli

//push adds the 2nd array as an array only 

const newArr = tmkocChar.concat(tapusena);
// console.log(newArr); //adds elements of 2nd array as actual elements and not their array

const allChar = [...tmkocChar, ...tapusena]; //spreads and keeps all elements seperate but in single array more preffered that concat
// console.log(allChar);

const anotherArr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
// console.log(anotherArr);
// console.log(anotherArr.flat(2)); // flat merges all sub arrays into a single one and we pass depth as a parameter to it which can be infinity if we don't know the value

//Checking if array - isArray() returs boolean
// console.log(Array.isArray([1,3,4,6,2]));
// console.log(Array.isArray("Shraddha"));
// console.log(Array.from("Shraddha")); // creates array from string
// console.log(Array.from({name : "Shraddha"})); // we have to mention whether we need to perform operations on keys or values otherwise it always result empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






























































