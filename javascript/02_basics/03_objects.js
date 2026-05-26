// object literals
const user = {
    name : "Yuvraj",
    age : 20,
    sex : "male",
    isLoggedIn : false,
    "full name" : "Yuvraj Mehta"
}

console.log(user.age)
// better
console.log(user["name"])   // if itn is a string value ,  we'll have to access it through this way "name"

// why is it better
// we cannot access "full name" through dot property , we'll have to access through square notations
console.log(user["full name"])

user.greetings = function(){
    console.log("hello")
}
console.log(user.greetings())    

user.greetingstwo = function(){
    console.log(`hello ${this.name}`)
}
console.log(user.greetingstwo())
