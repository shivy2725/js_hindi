function myname(){
    console.log("my name is shivam");
    
}

function additon(a,b){ // a and b are parameters 
    console.log(a+b);
    return a+b ;
    
}
const results = additon("10",20); // here 10 and 20 are arguments 
myname();
console.log(results);

// if we donot pass any argument function will take undefined

function getvalue(a,b,...num1){ // rest operator 
    return a,b, num1;   // collecting all values in an array 
}

console.log(getvalue(10,20,30,40,50));

// with objects 

const user = {

    name : "shivam",
    age : 22 ,
}

function print(anyobject){
    console.log(`hello ${anyobject.name} , your age is ${anyobject.age}`);
    
}

print(user);
// or 
// print({
//     name : "shivam",
//     age : 22 ,
// })

const mynewarray = [200,400,100,600]

function returnvalue(getarray){
    return getarray[1] + getarray[2];
}

console.log(returnvalue(mynewarray));
