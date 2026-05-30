//     FOR OF LOOPS

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "le re lund ke"
for (const greet of greeting) {
    if(greet == " ") continue;
    console.log(greet)
}

const map = new Map()
map.set('IN',"INDIA")
map.set("US" , "United States Of America")
map.set("IN" , "india") 
for (const [key,value] of map) {
    console.log(key,value)
}
// maps provide only uinique values in the same order

// we can't iterate objects using forof loops



//       FOR IN LOOP
const obj = {
    js : "javascript",
    cpp : "c++",
    c : "C"
}
for (const key in obj) {
    console.log(`${key} : ${obj[key]}`)
}

const arrr = ["spidyy","hulku","thoorwa re","padman"]
for (const key in arrr) {
    console.log(key)
    console.log(arrr[key])
//// notice the difference with forof loop in case of arrays
}




