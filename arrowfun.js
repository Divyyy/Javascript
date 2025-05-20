const user = {
    username: "doggesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
console.log(this);
// in browser the global object is window object





// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
    
// }
 const chai =  () => {
    let username = "hitesh"
     console.log(this.username);
    
 }



//  arrow function in details



// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

//  impelcet return
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4));


//  how to take object

const addTw = (num1, num2) => ({username: "hitesh"})
console.log(addTw(6,9));



