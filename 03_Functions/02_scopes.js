var c = 300;

let a = 100;
if (true) {
    let a = 10 ;
    const b = 20 ;
    var c = 30 ;// var donot have block scope it is a global scope 
    
    console.log("inner", a ,b,c);
    
}

console.log("outer" , a,c);

//  nested fucntions and scopes 

function one(){
    const username = "shivam";

    function two(){
        const website = "youtube";
        console.log(username);
        
    }

    //console.log(website);

    two();    
}

one();// here we can call the function before declaration  

// +++++++++++++interesting way of function writing+++++++++

const addtwo = function(num){
    return num + 2 ;
}

console.log(addtwo(10)); // here we only call the function after declaration