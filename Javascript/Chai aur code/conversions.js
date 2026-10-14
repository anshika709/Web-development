let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => easilly converted to 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 17

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);