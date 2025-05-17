const arr = [0 ,1,2,3,4,5,5,6,7]
// here array contains different data types

const arr1 = new Array(10,20,"shivam",true)
console.log(arr);
console.log(arr1);
console.log(arr.length);// for getting length of array 
console.log(arr1[2]);
arr1.push("kumar")
console.log(arr1);
arr1.push(7)
console.log(arr1);
arr1.pop()
console.log(arr1);

arr1.unshift("hello") // similar to push operation 
console.log(arr1); // for adding element from starting of an  array 

arr1.unshift("fello")
console.log(arr1);

arr1.shift()
console.log(arr1);

arr1.shift() // similar to pop operation 
console.log(arr1);

console.log(arr.includes(2)); // for searching an element in an array 
console.log(arr.indexOf(4))

const newarr = arr.join()

console.log(arr)
console.log(newarr)
console.log(typeof newarr)

// slice and splice 

console.log("A " , arr);

const newarr1 = arr.slice(2,5)
console.log(newarr1);

console.log("B ", arr);

const newarr2 = arr.splice(2,5)
console.log(newarr2)
console.log("C ", arr);

// difference between slice and splice are ;
// slice does not containe the last element but splice does 
// splice remove the element from the array according to the range 

