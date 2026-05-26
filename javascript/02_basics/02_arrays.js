const marvel = ["thor" , "ironman" , "captain" , "hulk"]
const dc = ["flash" , "superman" , "wonderwoma" , "batman"]

marvel.push(dc)
console.log(marvel)
console.log(marvel[4])
console.log(marvel[4][1])

const all = [...marvel, ...dc]
console.log(all)


const arr = [2 , 4 , 6 , 8 , 9 , [3 , 0 , 8 , 89] , [4 , 8 , 90 , [3 , 7 ,[8 , 10]]]]
const mergedarray = arr.flat(Infinity)       // the bracket holds the value of how much depth you want to go for (here , 3)
console.log(mergedarray)


console.log(Array.isArray("yuvraj"))
console.log(Array.from("yuvraj"))



let p = 100
let q = 200
let r = 300
console.log(Array.of(p,q,r))

