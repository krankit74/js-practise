//24 Feb 2026
/*//Array() : array constructor creates new array object

const arrayEmpty = new Array(2);   //If the only argument passed to the Array constructor is an integer between 0 and 232 - 1 (inclusive), this returns a new JavaScript array with its length property set to that number.
const array2 = new Array(3,4)

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(array2);
*/

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable 
// console.log(Array.from("foo"));
// console.log(Array.from([1, 2, 3], (x) => x + x));

 
/*//at()
const array = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array.at(index)}`);
index = -2;
console.log(`An index of ${index} returns ${array.at(index)}`);
*/


// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
const array = [1, 4, 9, 16];
const mapped = array.map((x) => x * 2);
console.log(mapped);
   

//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

//.................................................................................................................................................................................................................................

//25 Feb 2026


//reduce()  //reduce() takes many values and reduces them into one single value.
const array1 = [1, 2, 3, 4];


const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

// accumulator → result carried forward
// currentValue → current array element
// initialValue → starting value of accumulator

//A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn

//forEach()
// The forEach() method of Array instances executes a provided function once for each array element.
const array2 = ["a", "b", "c"];
array2.forEach((element) => console.log(element));

//A function to execute for each element in the array. Its return value is discarded
//The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and is not chainable. 


//sort() method
/*const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array3 =  [45, 4545, 89, 0 ,834]
array3.sort();
console.log(array3);

const array4 = ["45", "4545", "89", "0", "834"]
array4.sort();
console.log(array4);
*/

// include() method

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const arra= [1, 2, 3];

console.log(arra.includes(1,1));   //search element 1 form index 1
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("at"));

//includes() → Is this exact value present?
// some() → Does ANY element satisfy my condition?

const array6 = [1, 2, 3, 4, 5];
const even = (element) => element >3;
console.log(array6.some(even));

//join() method
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); 
console.log(matrix.join(";"));