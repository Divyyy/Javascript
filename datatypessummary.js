// primitive
// 7 types--> String,Number,Boolean,null,undefined,Symbol,BigInt
// refrence type data type
// memory mai refrence allocation hota hai unka
// Array,Objects,Functions
const heros=["Ironman","Batman","Superman"]
let myobj = {
    name:"Divyam",
    age:22,
}
// myobj is this how we declare object
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myobj);



// Type	Result
// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object	"object"