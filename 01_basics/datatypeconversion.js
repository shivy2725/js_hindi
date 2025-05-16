let score = "33abc" 

console.log(typeof score)
console.log(typeof (score))

let value = Number(score)
console.log(typeof value)
console.log(value);


// "33" = 33
// "33abc" = NaN
// true = 1 ; false = 0 ; 

let isTrue = "" ;
let booleanvalue = Boolean(isTrue)
console.log(booleanvalue)

// 1 = true , 0 = false 
// " " = false , "abc" = true  

let somenumber = 33
let somestring = String(somenumber);
console.log(somestring)
console.log(typeof somestring)