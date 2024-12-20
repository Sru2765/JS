//can contain different data types
//dynamic
//array copy operations create shallow copies
let arr = [0,23,1,4,56,2] // one way of declaring array
const colors = new Array("Blue","Orange","Red"); //another way

// console.log(arr);
// console.log(colors[2]);

//Arrays methods
// arr.push(10); //adds 10 at the end
// console.log(arr); 
// arr.pop() //removes element from end
// console.log(arr);
// arr.unshift(7);//adds at beginning and shift all other elements one by one to right
// console.log(arr);
// arr.shift() //removes element from beginning
// console.log(arr);

// console.log(arr.includes(7)); // returns boolean
// console.log(arr.indexOf(2)); //return idx(int) of element and -1 if it's absent

// const newArr = arr.join(); //creates a newArr as a string

// console.log(arr);
// console.log(newArr);

const arrNew = new Array(0,1,2,3,4,5);
console.log("A "+arrNew);

const sec1 = arrNew.slice(1,3);//slice(starting_idx, ending_idx)
console.log(sec1);
console.log("B "+arrNew);

const sec2 = arrNew.splice(1,3);
console.log(sec2);
console.log("C "+arrNew);


//***** IMP Note ******
//Main differnece between slice and splice is that slice doesn't  manipulate original array it is slicing to
//But splice removes the specified range from original array and creates its seperate array instead with **inclusive range i.e 3 indx was also included





