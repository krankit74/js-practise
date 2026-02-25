// i want to understand exuction steps for call(), bind(), apply() using global excution 

function greet(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}`);
}

const person = { name: "John" };

greet.call(person, 25, "New York");

greet.apply(person, [30, "London"]);



function greet(city) {
  console.log(this.name + " from " + city);
}

let user = { name: "Ankit" };

let boundFn = greet.bind(user, "Noida");
boundFn();