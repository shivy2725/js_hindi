const map = new Map();

map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('RUS','RUSSIA')
map.set('IN','INDIA') // this is not print because map take unique pair 

console.log(map);

 // using forof loop 

 for(const [key,value] of map){
    console.log(key ," is for country ",value);
    
 }
 // forin loop using for object 

console.log("-----------------");
 const obj = {
    name1:'sachin',
    name2 : 'suraj',
    name3 : "shivam",

}

for(const key in obj){
   console.log(`the ${key} is for ${obj[key]}`);
   
    
}

const programming = ['c','c++','java','python']

for (const key in programming) {
   console.log(`the index value ${key} is for ${programming[key]} `);
   
}