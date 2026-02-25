//24 Feb 2026

// const test = {
//   prop: 42,
//   func() {
//     return this.prop;
//   },
// };

// console.log(test.func());


// const person1 = {
//   name: "Sujit",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// person.greet(); // Sujit


// const person = {
//   name: "Sujit",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// person.greet();
// console.log(window.name);

// Arrow function does NOT bind this to person
// It takes this from the outer scope (likely window)
// window.name is usually undefined



// const person = {
//   name: "Sujit",
//   greet: function () {
//     console.log("Normal:", this.name);

//     const arrowFunc = () => {
//       console.log("Arrow:", this.name);
//     };

//     arrowFunc();
//   }
// };

// person.greet();


// const person = {
//   name: "Alice",
//   greet() {
//     console.log(this.name);
//   }
// };

// person.greet(); 

// const greetFn = person.greet;
// greetFn(); // undefined (or window.name in browsers)

// function greet(age, city) {
//   console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}`);
// }

// const person = { name: "John" };

// greet.call(person, 25, "New York");


// greet.apply(person, [30, "London"]);

// console.log(this)

var a = 10;
console.log(this.a);    

// var a attaches to window
// this → window
// Output → 10
// let / const do NOT attach to window





function greet(city) {
  console.log(this.name + " from " + city);
}

let user = { name: "Ankit" };

let boundFn = greet.bind(user, "Noida");
boundFn();

// Global Execution Context
//    ↓
// bind() creates new function (does NOT execute greet)
//    ↓
// boundFn() called
//    ↓
// this fixed to user
//    ↓
// greet executed with city = "Noida"