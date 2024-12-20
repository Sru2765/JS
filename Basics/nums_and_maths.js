const num1 = new Number(200);
// console.log(num1);
//such object declaration results in printing different type of output
//obviously normal declaration and this one are both of same type but this one is specially treated as a number type

const num2 = 100.34567
// console.log(num2.toString().length);
// console.log(num2.toFixed(3)); //rounds of to three digits only

const otherNum = 123.5567
// console.log(otherNum.toPrecision(4)); //Returns a string 
// console.log(otherNum.toPrecision(3)); 
// console.log(otherNum.toPrecision(2)); 
//so precision focuses only on the no of digits we provided as a parameter

//to get better representation of larger hundreds then - 
const hundreds = 100000000
// console.log(hundreds.toLocaleString()); //seperates using commas
// console.log(hundreds.toLocaleString('en-IN')); //Indian style


//***************Maths*******************
// console.log(Math.abs(-8));
// console.log(Math.round(3.67)); //actually rounds off
// console.log(Math.ceil(4.2));//rounds off to bigger values like 4.2 => 5
// console.log(Math.floor(5.9)) //always rounds off to integer part even if normally 5.9 means 6 it will round off to 5 only
// console.log(Math.min(7,4,87,3,4));
// console.log(Math.max(6,7,2,25,3));

console.log(Math.random()); //if no range provided it will give a random no between 0 and 1 only
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));


//*IMP
const min = 10;
const max = 20;
//*****Remember the formula
console.log(Math.floor(Math.random() * (max - min + 1) + min));










