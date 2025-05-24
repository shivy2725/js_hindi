const coding  = ["js","ruby", "java" , "python", "cpp"];

coding.forEach( function (item){
    console.log(item);
    
})

// OR 

console.log("--------------------");


coding.forEach( (item) => {
    console.log(item);
    
})


console.log("--------------------");

// more parameteres 
coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
})

console.log("--------------------");

function printme(item){
    console.log(item);
    }

coding.forEach(printme)