//23 feb

/*
function myFunc(theObject) {      //here we are passing the parameter as an object 
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar);
console.log(myCar.make); // "Toyota"
*/

/*
function myFunc(theArr) {
  theArr[3] = 30;
}

const arr = [45, 5, 65, 64];

console.log(arr[3]); 
myFunc(arr);
console.log(arr);
console.log(arr[3]); 
*/

// const greet = function() {
//   console.log("Hello");
// };

// greet();


const greet = () => {
  console.log("Hello");
};

console.log(greet());
