//  stack (Primitive), Heap (Non-Primitive)


//Stack

let mySocialName = "cup_cake"

let anothername = mySocialName
anothername = "anshika__rai_28"

console.log(anothername);
console.log(mySocialName);

// Heap

let user1 = {
    email: "abc@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "def@gmail.com"

console.log(user1.email);
console.log(user2.email);