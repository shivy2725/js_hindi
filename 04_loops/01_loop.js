// for loop 

for(let i   = 0 ; i   < 10 ; i  ++){
    if (i == 5) {
        console.log("5 is found ");
        continue // skip a part of loop  
        // break keyword is used to terminate the loop 
    }
    console.log(i );
    
}

let arr = ["batman", "superman", "spiderman", "ironman"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
    
}