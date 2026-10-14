// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

// Type of date is object
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);

// months are started from 0 in java script
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());

// When date is given input in single digit (in array) month statrts from 0, but when date is given input in form of mm-dd-yy then counting starts from 1
let myCreatedDate2 = new Date("01-14-2026");
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())

// To convert date from mili seconds to seconds

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate);
console.log(newDate.getDay);
console.log(newDate.getMonth + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})