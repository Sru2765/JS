const name = "Shraddha";
const age = 19;

console.log(`My name is ${name} and my age is ${age}.`);
//above is called 'string interplation' where we use '$' symbol to insert variables in string
//it is a good practice instead of using + to concatenate.

//many methods are there to work with strings - 
// console.log(name.__proto__);

// console.log(name.length);
// console.log(name.toUpperCase()); //this Upper case will be done on copy of name and not actually in name string
// console.log(name.charAt(4));
// console.log(name.indexOf('m'));
// console.log(name.search('m'));

const newStr = name.substr(0,5); //end index - exclusive
console.log(newStr);

let newStr2 = name.slice(2,5);
console.log(newStr2);

newStr2 = name.slice(-8,4)
console.log(newStr2);

//trim works only on white spaces(if any)
const newStr3 = " Trupti "
console.log(newStr3);
console.log(newStr3.trim());

//repalce(original, newValue)
const mail = "shr#gmail.com"
console.log(mail.replace("#","@"));
//includes => boolean value as a result
console.log(mail.includes("shr")); 
console.log(mail.includes("trupti"));

//split - split(seperator,limit)
console.log(mail.split('.'));

















