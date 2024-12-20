//Dates

let today = new Date();
// console.log(today);
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toJSON());
// console.log(today.toLocaleString());
// console.log(today.toISOString());

//typeof any date is obviously object as we have even declared it like that
// console.log(typeof today);

//we can create a specific date as well
let myDate = new Date(2005,5,27);
//console.log(myDate.toLocaleDateString('en-IN'));
//Month indexing in js starts with 0

//Time
let myTime = Date.now();
// console.log(myTime);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //miliseconds converted to seconds

let newDate = new Date()
// console.log(newDate.getMonth() + 1); // return month based on 0 indexing
//DOne +1 to amke it understandable
// console.log(newDate.getDay()); //returns date based on 0 indexing like 0 - Sunday, 1 - Monday....6 - saturday
// console.log(newDate.getTime()); //returns miliseconds since a defined time in US 

console.log(`Today is ${newDate.toLocaleDateString()} and time is ${newDate.getTime()}`);

//toLocaleString() is a powerful method where we can pass many arg to customize even using objects




