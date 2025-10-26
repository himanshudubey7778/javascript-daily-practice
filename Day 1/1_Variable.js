const accountId = 144543
let email = "himanshudubey@gmail.com"
var accountPassword = "1234"
accountCity = "lucknow"
let accountState = "U.P."

//accountId = 2  //Not allowed

accountEmail = "Ujjvalsingh@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"

accountEmail = "Divyanshdubey@gmail.com"
accountPassword = "7028282"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])