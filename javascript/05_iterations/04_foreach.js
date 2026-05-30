//      FOR EACH LOOP

const arr = ["js","c++","c","java","python",'ruby']
arr.forEach(element => {
    console.log(element)
});

//or

arr.forEach((a,b,c)=>{
    // item,index,array                    // function (){}   remember there'll be no name of function
    console.log(a,b,c);
    
})
let Coding = [
    {
        language : "javascript",
        file : "js"
    },
    {
        language : "c++",
        file : "cpp"
    },
    {
        language : "C",
        file : "c"
    }

]

Coding.forEach((item) => {
    console.log(item.file)
});