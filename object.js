//23 feb 
/*
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); 
*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
console.log(myCar);
const myCar2 = myCar;
myCar2.make = "BMW"
console.log(myCar2)