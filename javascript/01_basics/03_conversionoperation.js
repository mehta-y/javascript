let score = "30"
console.log(typeof score)
// abhi string hai
let valueInNum = Number(score)
console.log(typeof valueInNum)
// ab ye number mein convert hogya
let string = "30abc"
// abhi string hai 
let valueInNumber = Number(string)
// converted to number
console.log(typeof valueInNumber)
console.log(valueInNumber)


/*  "30" -> number => 30
    "30abc" -> num => NaN
    30 -> string => "30"
*/


let IsLoggedIN = 1
// ABHI ye number hai
console.log(typeof IsLoggedIN)
let booleanisloggedin = Boolean(IsLoggedIN)
console.log(typeof booleanisloggedin)
console.log(booleanisloggedin)


/*  1 -> boolean => true
    0 -> boolean => false
    "sdfghj" -> boolean => true
    "" -> false
*/


let str1 = "hello"
let str2 = " Yuvraj"
let str3 = str1+str2
console.log(str3)


console.log(1+"2") 
//12
console.log("1"+2)
//12
console.log("1"+2+3)
//123
console.log(1+2+"3")
//33

let x = 3
let y = x++
console.log(`x:${x} , y:${y}`)
// postfix operators increment after returning the value
let a = 3
let b = ++a
console.log(`a:${a} , b:${b}`)
// prefix operators increment before returning the value