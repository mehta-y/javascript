//   for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
    
}

//      BREAK AND CONTINUE

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`)
        break;                              // breaks frm the loop
    }
    console.log(`value of index is ${index}`)
    
}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`)
        continue;                         //  skips that value
    }
    console.log(`value of index is ${index}`)
    
}





