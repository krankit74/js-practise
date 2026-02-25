// 24 Feb 2026

//A closure is formed when a function remembers and accesses variables from its outer lexical scope even after that outer function has finished execution.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

let fn = outer();
fn();
fn();