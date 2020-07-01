// updateing objects with immutability

const person = {
    name : "John",
    address : {
      country : "USA",
      city : "San francisco"
    }
  };
  
  const updated = 
  Object.assign(
    {}, person, {name : "Bob", age : 30}
    );
  console.log(updated);
  
  const updated1 = {
    ...person, 
    name : "Bob"
  }; /* "..." is called spread operator */
  
  updated1.address.city = "New York";
  console.log(person);
  
  const updated2 = {
    ...person, 
    address : {
      ...person.address = "New York"
    },
    name : "Bob"
  };