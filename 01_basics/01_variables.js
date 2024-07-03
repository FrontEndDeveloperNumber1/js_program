const accountId = 144553
let accountEmail = "jig.anywhere@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountStatus

console.log(accountId);
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]);

/*
Perfer not to use var
because of issue in block scope and functional scope
*/