const accountID = 122 //can't reassign values 
let accountEmail = "sru@gmail.com" 
var accountPwd = "Shr#27" //not used because scope is not resolved by var
accountCity = "Pune"
let accountState; //for uninitialized variables it is 'undefined' by default
// accountID = 134 -> not allowed as it's const
console.log(accountID)

accountEmail = "shr@gmail.com"
accountPwd = "1234"
accountCity = "Mumbai"

console.table([accountID,accountEmail,accountPwd,accountCity,accountState])

/*
Only let and const is used for variable declaration in js
Also not declare without using any keyword though allowed
*/