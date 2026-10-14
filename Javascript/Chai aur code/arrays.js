const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// Push (adds value in the array)
myArr.push(6)
myArr.push(7)
console.log(myArr);

// pop (removes last value of array)
myArr.pop()

// unshift (adds value at start and shifts all the values one position back)
myArr.unshift(9)
console.log(myArr)

// shift (removes first element of array)
myArr.shift()
console.log(myArr)

// includes (tells wether a value is present in the array or not it answers in boolean)
console.log(myArr.includes(9));

// indexOf (checks wether the index of that number is present in the array or not)
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

// join (adds all the element of the array into string or chnages datatype from array to string)
const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);


// slice, splice (slice: returns a section of array)
// difference between slice and splice:
// 1. splice includes range and slice doesn't includes range
// 2. splice changes the original array (original array me se splice wala portion hat jata hai) & in slice original array remains as it is

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ",myArr);

const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["spiderman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

// spread: spreads the element of array; comanlly used in concating two strings

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);