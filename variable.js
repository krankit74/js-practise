// 23 Feb

// var → function-scoped
// let → block-scoped (changeable)
// const → block-scoped (not re-assignable)

//let
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); //10
}
test();

//var
var a = 5;
var a = 10;
console.log(a); // 10


if (true) {
  let y = 20;
}
console.log(y); // ReferenceError

//const
if (true) {
  const z = 30;
}
console.log(z); //Error

const p = 10;
p = 20; //  Error