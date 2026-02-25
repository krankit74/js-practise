//25 Feb 2026

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " world"
console.log(str1 +  str2); 

console.log("1"+2);
console.log(1+"2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 

console.log((3 + 4) * 5 % 3);

console.log(+true);// This will return 1 because true is converted to 1 when used with the unary + operator.
console.log(+""); // This will return 0 because an empty string is converted to 0 when used with the unary + operator.

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);

let gameCounter = 100
gameCounter++; 
++gameCounter;
console.log(gameCounter);



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);


let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);

console.log("100" - 100)