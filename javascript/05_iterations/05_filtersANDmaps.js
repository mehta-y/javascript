const myNums = [1,2,3,4,5,6,7,8,9,10]
const value = myNums.filter((num) => num>4)      // returns a value in the form of array

console.log(value)


const valu2 = myNums.map((num)=> num+10)
console.log(valu2)

//// chaining

const valu3 = myNums
                .filter((num) => num > 5)
                .map((num) => num + 10)
                // now the value of num for here has been modified
                .map(num=>num+10)

console.log(valu3)