

// object literals
const mySym = Symbol("key")

const dvUser = {
    name:"Divyam",
    age:21,
    [mySym]: "mykey1",
    "full name": "Divyam srivastava",
    location: "Jaipur",
    email:"divam473@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(dvUser.email);
// console.log(dvUser["email"]);
//  // we use "" because it accessed in strings
//  console.log(dvUser["full name"]);
//  console.log(dvUser[mySym]);
//  console.log(typeof(mySym));

//  aktering obj
 dvUser.email = "divvy473@gmail.com"
//  Object.freeze(dvUser)
 dvUser.email = "divvmoon"
//  console.log(dvUser);
dvUser.greeting = function(){
    console.log("HELLO DV USER");
}
dvUser.greetingTwo = function(){
    console.log(`HELLO DV USER, ${this.name}`);
    

}

console.log(dvUser.greeting());
console.log(dvUser.greetingTwo());

 
 
 
 

