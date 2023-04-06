function receivesAFunction(cb) {
    console.log(cb());
}
receivesAFunction(function () { return "Something else" });

function returnsANamedFunction() {
    return function namedFunction() {
      console.log('This is a named function');
    };
  }
  
  const myFunction = returnsANamedFunction();
  
  console.log(myFunction.name); 

  function returnsAnAnonymousFunction() {
    return function() {
      console.log('This is an anonymous function');
    };
  }
  
  