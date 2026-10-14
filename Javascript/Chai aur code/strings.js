const name = "Anshika"
const repocount = 2

//console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('anshika');

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));


const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring)

// Trim

const newstring1 = "    anshika    "
console.log(newstring1);
console.log(newstring1.trim());

// Trim Start & End

// Replace

const url = "https://anshika.com/anshika%23rai"

console.log(url.replace('%23', '-'))

// url.includes (To find out wether that word is present in the url or not)
console.log(url.includes('sundar'))

// Split (to coonvert string to array based on something (ex: based on - or space, etc))

console.log(gameName.split('-'));