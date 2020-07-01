// currying usage

function add(a) {
    function add(b) {
      return a + b;
    };
  } /* normal function declaration */
  
  const add1 = a => b => a + b; /* (a, b) => a + b function declaration by using currying */
  
  add(1)(5); // add(1, 5)
  // N => 1 composing N numbers of arguments in 1 argument is called currying
  
  const wrap = type => str => `<${type}>${str}</${type}>`;
  
  const transform2 = pipe(trim, toLowerCase, wrap("div"));
  console.log(transform2(input));
  
  const transform3 = pipe(trim, toLowerCase, wrap("span"));
  console.log(transform3(input));