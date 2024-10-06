// array
const myArr=[0,1,2,3,4,5]
const myheros=["Batman","spiderman"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// Array Methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(9); unshift add element at 0 index where as push uploads new value at the end
// myArr.shift(); shift removes the 0 indexed from array
// console.log(myArr.includes(9)); it ask wether the specfic thing exist in array or not
// console.log(myArr.indexOf(3)); tell the index of spefic item
// const newArr = myArr.join() it converts array into string 
// console.log(newArr);
// console.log(myArr);

// slice and splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);



