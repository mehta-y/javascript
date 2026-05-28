const user = {
    name : "Yuvraj",
    city : "Patna",
    welcomeMessage : function(){
        console.log(`${this.name} from ${this.city} , welcome to website `)
        console.log(this)
        // THIS pointer processes the function with the current context and works only inside object
    }
    
}
user.welcomeMessage()
// currently the context is yuvraj 
user.name = "Sonaxy"
user.city = "Madhepura"
user.welcomeMessage()
// this time the context shifts to sonaxy

console.log(this)
// here the current context is nothing as it is in the global scope


function random(){
    console.log(this)
}
random()               // pura lawdda lahsun aa jayega


function random2(){
    let username = "yuvrajj"
    console.log(this.username)                              // undefined
}
random2()



// functions whuich run explicitly where we need to give a return type to get a value if there are braces in it
const add = function(num1 , num2){
    return num1 + num2
}
console.log(add(8,9))



// implicitly
const sub = (num1,num2)=> (num1-num2)
console.log(sub(9,3))
