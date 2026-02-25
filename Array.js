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


//reduce()  //reduce() takes many values and reduces them into one single value.
const array1 = [1, 2, 3, 4];


const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

//A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn

//forEach()
