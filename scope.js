// 24 Feb 2026

var x = 1;

function outer() {
  var y = 2;

  function inner() {
    var z = 3;
    console.log(x, y, z);
  }

  inner();
}

outer();

// x -> undefined
// outer -> function
// x = 1
// outer() called

// outer() execution context 
// y -> undefined
// inner -> function
// y = 2
// inner() called

// inner() Execution Context
// z -> undefined
// z = 3
// console.log(x, y, z)

// inner → outer → global
