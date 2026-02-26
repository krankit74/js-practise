//25 Feb 2026
//An object is collection of key value pairs , non-premitive data type

/*let user = {
  name: "Ankit",
  age: 24,
  isDeveloper: true
};

console.log(user);
console.log(user.age);
console.log(user["name"]); //another way to accesss the variable in object

user.city = "Gurgaon";
console.log(user);
user.age = 25;
console.log(user);
*/

let person = {
  name: "Ankit",
  greet: function () {
    console.log("Hello " + this.name);
  }
};
person.greet();

let fn = person.greet;
fn(); // undefined (or window/global)

//note: difference between person.greet() and person.greet
//person.greet() :- presssing the switch (light on)
//person.greet  :- pointing to the switch (nothing happens)


//Object destructuring is a JavaScript syntax that allows you to extract multiple properties from an object and assign them to distinct variables in a single, concise statement.

let user = {
  name: "Ankit",
  age: 24
};

// let { name, age } = user;
// console.log(name);


//looping through object 
for (let key in user) {
  console.log(key, user[key]);
}

//copying object

let obj1 ={
  name: "ankit",
  age: 23,
  address: {
    state: "bihar",
    country: "india",
    postaladd: {
      pincode: 800001
    }
  }
}

let obj2 = obj1;                       //No new object is created ,obj2 just points to the same memory location as obj1 , This is called reference copying
console.log(obj1);
console.log(obj2);

obj2.address.country = "london"
obj2.address.postaladd.pincode = 804453

console.log(obj1);
console.log(obj2);
//here what we are seeing like by changing in obj2 , changes also reflect in obj1 how?
//there are three ways to solve this problem like
// let obj2 = { ...obj1 }; i.e. spread opertor   => sallow copy => copy at first level
// let obj2 = JSON.parse(JSON.stringify(obj1));   i.e. stringinfy => deep copy but limited means it does not function,undefined,symbole,data,map/set
// and third will be using structuredClone() method => deep copy

//26 Feb 2026

let user1 = new Object(obj1);  // it is same as line no. 66 but it is used generally to make empty object
console.log(user1);
user1.address.country = "brazil"
user1.address.postaladd.pincode = 12345

console.log(obj1);
console.log(user1);






