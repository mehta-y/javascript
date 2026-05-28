const arr = [32 , 4 , 53 , 98 , true , "dxfgchjk"]
console.log(arr)

const arr2 = new Array(232,"32w4",5342,543)
console.log(arr2)
// arrays always create shallow copies (copies having same reference point)

// +++++++++++++++++++++++++  METHODS   ++++++++++++++++++++++++++++

arr.push(90)
console.log(arr)
arr.pop()
console.log(arr)


arr.unshift("YUVRAJ")              // inserts at 0th index
console.log(arr)
arr.shift()                        // pops from beginning
console.log(arr)


console.log(arr.includes(8))       // boolean
console.log(arr[789])              // -1



const newarr = arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)          // string type



console.log("slice" , arr.slice(1,3))                 // 3 not included
console.log("splice",arr.splice(1,3))                // 3 included
console.log(arr)                                     // splice manipulates the og array, it removes the elemnts listed