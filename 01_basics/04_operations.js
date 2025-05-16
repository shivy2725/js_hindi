let value = 3
let negative = -value; 
console.log(negative);

// arthimetic operations 
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);// exponential  
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " shivam"
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log("2" + 1);
console.log("2" + 1 + 3);// output = 213
console.log(2 + 1 + "3");// output = 33 
console.log("3" * 2 + 1);

console.log(+true);//1
console.log(+"");//0

console.log(null > 0);//false
console.log(null == 0);// false 
console.log(null >= 0);// true, because null is converted to 0 
console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false

// strict checking ' === ' it check both value and types 

console.log(2 === "2");// false 

// datatype is divided into two parts 

// 1 . primitive datatypes 
// 7 types : string , number , boolean , null , undefined , symmol , bigInt 

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid); // false 
const bigInt = 1242436465243124352464523n



// 2 . non primitive datatypes (reference datatypes)
// 3 types : object , array , functions 

const heros = ["spiderman", "ironman","batman"];
let myhero = {
    name : "shivam",
    age : 20,
}
 console.log(myhero);

 const functions = function(){
    console.log("hello world");
 }
 