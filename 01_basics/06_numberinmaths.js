const score = 500;

const balance = 100;
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);// lenght of number 
console.log(balance.toFixed(2));//for float values 

const newnumber = 123.986
console.log(newnumber.toPrecision(4));

const hunderds = 10000000;
console.log(hunderds.toLocaleString('en-IN'));

const value = -43;
console.log(Math.abs(value));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,4,1,6));
console.log(Math.max(4,3,4,1,6));

console.log(Math.random());// random value between 0 and 1 
console.log((Math.random()*10) + 1 );

//for give range to find random number 

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1 )) + min );
// 1 is for removing 0 from the range 


