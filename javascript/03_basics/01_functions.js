function sum(num1 , num2){
    return (num1+num2)
    console.log("yuvraj")        // this line will never be executed because we have already returned something
}
const result = sum(5,6)
console.log(result)

function login(username){    // if we use username = "sam" then atleast we'll get sam as username unless there's an input
    if(!username){                     //username === undefined
    console.log("please enter a username")
    return 
}
    return `${username} just logged in`
}

console.log(login("Yuvraj"))



function cart(...num){        // here "..." is reest op which return the array consisting all the listed arguments
    return num
}
console.log(100,200,300,400,500)

//       pass an object in a function
const user = {
    name : "Yuvraj Mehta",
    age : 20
}

function handleObject(obj){
    console.log(`Hi! I'm ${obj.name} and my age is ${obj.age}`)
}
handleObject(user)