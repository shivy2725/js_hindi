// primitive types are stored in the stack memory 
// non primitive types are stored in heap memory 

  // stack example 
  let myname = "shivam";
  anothername = myname
  console.log(anothername);

  anothername = "shiva"
  console.log(anothername);
  
  // heap example 

  let userone = {
    name : "john",
    age :20,
  }

  let usertwo = userone ;
  console.log(usertwo);

  usertwo.name = "shivam"
  console.log(userone.name);
  console.log(usertwo.name);
  
  // stack give copy of the value 
  // heap give reference of the value 