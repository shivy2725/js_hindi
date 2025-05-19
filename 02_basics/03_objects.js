 // object literals

 const mysum = Symbol("key1");


 const person = {
        name :"shivam",
        [mysum] : "keyvalue1",
        age : 22,
        location : "bhilai",
 }
 console.log(person);
 //accessing particular element of object 

//  console.log(person.name);
//  console.log(person["age"]);
//  console.log(person[mysum]);
//  console.log(typeof person[mysum]);
 
 person.age = 23;
 console.log(person.age);// for changing the object value 

 //Object.freeze(person)// for freezing the object 
person.age = 24;
console.log(person);
 
person.greeting = function(){
    console.log("hello buddy");
    
}

person.greetingtwo = function(){
    console.log(`hello buddy,${this.name}`);
    
}

console.log(person.greeting());
console.log(person.greetingtwo());

 