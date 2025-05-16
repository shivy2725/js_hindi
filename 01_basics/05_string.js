const name = "shivam"
const age = 20 ;
console.log(name + age + " student ");

console.log(`hello my name is ${name} and i am ${age} years old`);

const  gamename = new String('cricket-game');

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf("k"));

const newstring = gamename.substring(0,4)
console.log(newstring);



const anotherstring = gamename.slice(-8 , 7);
console.log(anotherstring); 

const anotherstring2 = "     hello world   "

console.log(anotherstring2.trim());

const url = "https://www.google.com"

console.log(url.replace("google", "shivam"));

// question statement 

console.log(url.includes("google"));

console.log(gamename.split("-"));


