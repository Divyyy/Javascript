// here we will learn variables and constant
const accountId = 1445533
let accountEmail= "div@google.com" 
var accountPassword = "jaipur"
accountCity = "Jaipur"
// accountId = 2 not allowed as constant won't change
accountEmail = "hhh@c.com"
accountPassword ="343"
accountCity=" Bengaluru"
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity])
// var is function scoped, not block scoped.
// This means that a variable declared with var can be accessed anywhere within the function it was declared in, even outside of blocks. This can lead to unexpected behavior and potential bugs.