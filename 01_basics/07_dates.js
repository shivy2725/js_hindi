let mydate = new Date(); // date is an object typeof 
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log("new date \n");

let newdate = new Date(2025,0,23 , 5, 4) // months is start with  0
console.log(newdate.toLocaleString());

let mytime = Date.now()
console.log(mytime);
console.log(newdate.getTime());

newdate.toLocaleString('defalut', {
    weekday : 'long',
})