const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["flash","batman","superman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// const allheros= marvel_heros.concat(dc_heros);
// console.log(allheros);

// push add data into it existing arrays where as concat gives you new array

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
// here in aboe syntax we used spread opreator it helps to add more than 1 element it is better than concat
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
 console.log(Array.from({name:"Hitesh"}));   // here we have not spefied what should be array key or value thats why it will return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2,score3));
// it converts into array


