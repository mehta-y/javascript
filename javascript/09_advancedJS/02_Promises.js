// // // // // const promiseOne = new Promise(function(resolve,reject){
// // // // //     // promises use callback functions which either resolve or reject the problem
// // // // //     setTimeout(()=>{
// // // // //         console.log("Async Work Done")
// // // // //         resolve()
// // // // //         // Here
// // // // //     },1000)
// // // // // })
// // // // // promiseOne.then(()=>{

// // // // //     // .then() is directly connected to the resolve function but we need to call it the way we did above
// // // // //     console.log("Promise Consumed")
// // // // // })


// // // // // we can also pass something like an object in .then() as an argument throught resolve
// // // // const promiseTWO = new Promise(function(resolve,reject){
// // // //     setTimeout(()=>{
// // // //         resolve({username:"Yuvraj",age:"21"})
// // // //     },1000)
// // // // })
// // // // promiseTWO.then(function(user){
// // // //     console.log(user)
// // // //     // the user means the data passed through the resolve()
// // // //     console.log(user.username)
// // // // })



// // // const promiseThree = new Promise((resolve, reject) => {
// // //     let error = false
// // //     if(!error){
// // //         resolve({username:"Yuvraj",age:"21"})
// // //     }
// // //     else{
// // //     reject("ERROR: Something went wrong")
// // //     }
// // // })
// // // // promise.then().catch()............ this is the exact look of the syntax where we chain several functions
// // // promiseThree.then((user)=>{
// // //     console.log(user)
// // //     return user.username
// // // }).then((username)=>{               // that's how we chain , the return value of first goes as an argument in the second
// // //     console.log(username)
// // // }).catch((error)=>{               // this error comes from reject as catch is directly connected to reject()
// // //     console.log(error)
// // // }).finally(()=>{
// // //     console.log("The promise is either resolved or rejected")
// // // })                                 // finally is like a default.



// // // async await..... in cases where we don't want to move further unless the promise is completed. it handles errors gracefully
// // const promiseFour = new Promise((resolve, reject) => {
// //     let error = true
// //     if(!error){
// //         resolve({username:"Yuvraj",age:"21"})
// //     }
// //     else{
// //         reject("ERROR: Something went wrong")
// //     }
// // })
// // async function consumepromise() {
// //     try {
// //         const response = await promiseFour
// //         console.log(promiseFour)
// //     } catch (error) {                // the error comes from reject
// //         console.log(error)
// //     }
// // }
// // consumepromise();

// async function getallusers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/2")
//         // console.log(response)        ts isn't the best format
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error )
//     }
// }
// getallusers();

fetch("https://jsonplaceholder.typicode.com/users/2")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error) => console.log(error))
