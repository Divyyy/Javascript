// how memory work in JS
// stack(primitive)we get a copy of data
// heap(Non-primitive) we get the reference


// example of primitive data types

let mycollegename = "GLA UNIVERSITY"

let anothername= mycollegename
anothername="chaiaurcode"


console.log(mycollegename);
console.log(anothername);


// example of heap (non primitive)
let userOne= {
    email:"usergoogle.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="usergalaxy.com"
console.log(userOne.email);
console.log(userTwo.email);