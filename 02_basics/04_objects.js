const tinderuser = new Object() // singleton object 

const tinderuser1 = {} // non singleton object 

tinderuser.Id = "123abc"
tinderuser.name = "shivam"


const regularuser = {
    email : "shivam@google.com",
    fullname :{
        userfullname :{
            firstname : "shivam",
            lastname : "kumar",
        }
    }
}

console.log(regularuser.fullname.userfullname);

const obj1 = {1 : "A", 2 : "B"};
const obj2 = {3 : "C", 4 : "D"};

//const obj3 = Object.assign(obj1,obj2)
// {} it is represents an empty object 

// const obj3 = Object.assign({} , obj1,obj2)
//or 

const obj3 = {...obj1,...obj2};


console.log(obj3);

const user = [
    {
        name : "shivam",
        age : 22 ,
        location  : "bhilai"
    },
        {
        name : "kumar",
        age : 23 ,
        location  : "radhika-nagar"
    },
        {
        name : "sharma",
        age : 24 ,
        location  : "bilaspur"
    },

]
console.log(Object.keys(tinderuser));//keys of object 
console.log(Object.values(tinderuser));// values of object 
console.log(Object.entries(tinderuser));// all entries of object 
console.log(Object.entries(user));

// question statement 

console.log(tinderuser.hasOwnProperty("name"));


//console.log(user[1].name,age,location);
 
const course = {
    coursename : "javascript",
    price : 199,
    teacher : "shivam",
}

const {teacher : instructor} = course 

console.log(instructor);

//json

{
    // "name" : "shivamsharma",
    // "age" : "22",
    // "location" : "bhilai"
}
