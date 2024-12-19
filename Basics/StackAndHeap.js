//Only primitive data types in => stack
//so copies are made instead of doing changes in original one
//works throgh copies

let myName = "Shraddha"
let studName = myName;
studName = "Riya"
//console.log(myName);
//console.log(studName);
//Even changed in studName it doesn't reflect to ori myName


//Heap stores => nonPrimitive data types
//Changes are done in original variables and not the copies
//works through references

let userOne = {email : "shr@gmail.com",pwd : "1234"}
let userTwo = userOne;
userTwo.pwd = "Srutpat#27"

console.log(userOne);
console.log(userTwo);
//Change in one of the refering variable changes for all referring variables


