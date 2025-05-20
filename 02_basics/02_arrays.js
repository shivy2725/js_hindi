const marvel = ["thor","ironman","spiderman"]

const dc = ["superman","batman","flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

const heros = marvel.concat(dc)
console.log(heros);

//or

const newhero = [...marvel,...dc]
console.log(newhero);

const numberarray = [1,2,3,[4,5,6],7,[4,5,6,[1,3]]]
const newarr = numberarray.flat(Infinity)
console.log(newarr);

console.log(Array.isArray("shivam"));//for checking is in array or not 
console.log(Array.from("shivam"));// changing string to array 

console.log(Array.from({name:"shivam"}));//iteresting case

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1,score2,score3));



