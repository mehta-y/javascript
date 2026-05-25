console.log(1>2)
console.log(2>1)
console.log("2">1)             // simply converts both to number
console.log("33" == 33)        
console.log("5" === 5)        // strictly checks the datatype too

console.log(null>0)           
console.log(null == 0)
console.log(null>= 0)

// here we'll see the results varying because == and comparisons work differently
// comparisons conver null to 0

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)