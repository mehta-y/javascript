const user = {
    email : "user@gmail.com",
    fullname : {
        userfullname : {
            firstname : "yuvraj",
            lastname : "mehta"
        }
    }
}
console.log(user)
console.log(user.fullname)
console.log(user.fullname.userfullname.lastname)



const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1 , obj2}
// console.log(obj3)
//bekaar


const obj3 = Object.assign({},obj1 ,obj2)
// when we don't use the braces , at line 38 we'll get the keys of obj1 as [1,2,3,4] because it has become the target object
console.log("obj3 : ",obj3)             // merged

/// spread operator is used most of the time
const obj4 = {...obj1, ...obj2}
console.log("obj4 : ",obj4)

// keys and values
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
// gives an array consisting keys and values
console.log(Object.entries(obj1)) // gives array consisting arrays of all the keys and their respective values


console.log(obj1.hasOwnProperty("1"))         
console.log(obj1.hasOwnProperty("90"))