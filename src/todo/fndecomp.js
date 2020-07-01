// function decomposition

function sayHello() {
    return "Hello world";
  }
  
  let fn = sayHello; //only passing reference, not calling the function
  
  fn()        /* both are equal... */
  sayHello()  /* in terms of function calling*/
  
  function greet(fn) {
    console.log(fn());
  }
  
  greet(sayHello);
  
  function sayHello1() {     /*Higher order function which uses another function to operate within it*/
    return function() {
      return "Hello World";
    }
  }
  
  let fn1 = sayHello1();
  let message = fn1();
  
  let numbers = [1,2,3]
  numbers.map(number => number*2) /*Higher order function*/
  
  setTimeout(() => console.log("Hello"), 1000);
  
  let input = "   JavaScript   ";
  let output = "<div>" + input.trim() + "</div>"; /*trim and wrap the value within div*/
  console.log(output);
  
  const trim = str => str.trim();
  
  const toLowerCase = str => str.toLowerCase();
  
  const wrapInDiv = str => "<div>" + str + "</div>";
  const wrapInDiv1 = str => `<div>${str}</div>`;
  
  const result = wrapInDiv(toLowerCase(trim(input))); /*function composition*/
  const result1 = wrapInDiv1(toLowerCase(trim(input))); /*function composition*/