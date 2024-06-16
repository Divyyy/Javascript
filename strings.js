const name= "Divyam"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} anf my repo count is ${repoCount}`);
const gameName = new String('Divyam-ch')
console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    divyam    "
console.log(newStringOne);
console.log(newStringOne.trimStart())
console.log(newStringOne.trim());

const url ="https://divyam.com/divyam%20srivastava"

console.log(url.replace('%20', '//'))
console.log(url.includes('divyam'));
console.log(url.includes('dog'));

console.log(gameName.split('-'));