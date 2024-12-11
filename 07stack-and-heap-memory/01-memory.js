// Stack and Heap Memory
let myYoutubeName = "Ahshanul"
let anotherName  = myYoutubeName
console.log(anotherName);
anotherName = "Md Ahshanul Alam Khan"
console.log(anotherName);
console.log(myYoutubeName);


let user = {
    email: "user@gmail.com",
    nid: "12 14 18"
}

let user2 = user 

user2.email = "ahshanul@gmail.com"

console.log(user.email);
console.log(user2.email);

