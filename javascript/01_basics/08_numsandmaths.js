const score = 400
let balance  = new Number(100)  // type:object because you're creating an object instance of number class
console.log(score)              // 400
console.log(balance)            // [Number:100]

console.log(balance.toString().length)        // temporary
console.log(typeof balance) 

console.log(balance.toFixed(2)) // 100.00

let num = 123.87654
console.log(num.toPrecision(4))             //123.9
console.log(num.toPrecision(7))             //123.8765
console.log(num.toPrecision(3))             //124
console.log(num.toPrecision(2))


const num2 = 1000000
console.log(num2.toLocaleString())             // International number system
console.log(num2.toLocaleString(`en-IN`))     // indian no. system



// ++++++++++++++++++++++++++++++=MATHS=+++++++++++++++++++++++++++


console.log(Math.abs(-89))      // modulus
console.log(Math.round(4.9865)) // roundoff
console.log(Math.ceil(4.23))
console.log(Math.floor(9.234))

console.log(Math.sqrt(28).toFixed(2))


console.log(Math.min(4,6,7,45))
console.log(Math.max(4,567,3456,456))


console.log(Math.random())                      // always betweedn 0 and 1

const min = 20
const max = 30

console.log(Math.floor((Math.random()*(max-min+1))+min))