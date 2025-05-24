const values = [1,2,3,4,5,6,7,8,9];

const newnums = values.filter((num) => num > 4)

// if we open scope the we need to write a written statement 
// OR by foreach process
console.log(newnums);

console.log("----------------------------");

const array = []
values.forEach((items) => {
    if (items >= 4) {
        console.log(items);
        array.push(items)
    }
} )

console.log(array);


