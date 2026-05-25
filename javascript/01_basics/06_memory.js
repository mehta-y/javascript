/* In js , all the primitive datatypes go inside the stack memory whereas all the non 
   primitive ones go inside the heap memory
   In stack memory we get a copy of elements whereas in heap we get the direct reference
*/

let name1 = "yuvraj"
let name2 = name1
console.log(name2)
name2 = "mehta"
console.log(name2)
console.log(name1)
// name1 didn't change because it was a copy of the original one
// whereas in case of a non primitve datatype it is passed by reference

let p1 = {
   name : "yuvraj",
   age : 20
}
let p2 = p1
console.log(p2.age)
p2.age = 18
console.log(p1.age)
// here age of p1 also changed because it is passed by reference
