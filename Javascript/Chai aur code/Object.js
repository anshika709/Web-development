// singleton
// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Anshika Rai",
    [mySym] : "mykey1",
    age: 17,
    location: "Jaipur",
    email: "anshika@google.com",
    isloggedIn: false,
    lastLocation: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof mySym)

// For overwrite
JsUser.email = "ansh@google.com"
console.log(JsUser["email"])

// To freeze
// Object.freeze(JsUser)
// JsUser.email = "abc@google.com"
// console.log(JsUser)

// Function

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting())


JsUser.greeting2 = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting2())

// const tinderUser = new Object() --> singleton object
// const tinderUser = {} --> non-singleton

const tinderUser = {}

tinderUser.id = "345abc"
tinderUser.name = "Shayon"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shayon",
            lastname: "Choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1: "a", 2: "b"}
const obj2 = {3: "c",4: "d"}

const obj3 = {obj1,obj2}
console.log(obj3)

obj4 = Object.assign({},obj1, obj2)
console.log(obj4)

// concept of spread --> take a glass and drop it will  break into parts

const obj5 = {...obj1,...obj2}
console.log(obj5)

// array of objects

const users=[
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
    },
    {
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))