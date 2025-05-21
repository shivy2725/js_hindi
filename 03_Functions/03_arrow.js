const user = {
    name : "john",
    age : 20,

    welcomemsg : function(){
        console.log(`${this.name} , welcome to the prgramming world`);
        console.log(this);
        
    }
}

user.welcomemsg();
user.name = "shivam";
user.welcomemsg();
console.log(this);

function chai(){
    let username = "shivam";
    console.log(this.username);
    
}

chai();

// arrow function 

const chai2 = () =>{
    let username = "shivam";
    console.log(this);
    
}

chai2();

// eample 

// const addtwo = (num1 , num2) => {
//     return num1 + num2 ;
// }
// or
const addtwo = (num1 , num2) => ( num1 + num2 ) ;

//const addtwo = (num1 , num2) => ({username : "shivam"}) ;
console.log(addtwo(10,20));

const myarray = [1,2,3,4,6];
myarray.forEach()
