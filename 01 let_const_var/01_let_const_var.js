const accountId = 144553
let accountEmail = "khan@gmail.com"
var accountPassword = "12345"
accountCity = "Khulna"
let accountState;

// accountId = 2 //const can not be changed
accountEmail = "khanahshan@gmail.com"
accountPassword = "255255255"
accountCity = "Khulna,Bangladesh"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
