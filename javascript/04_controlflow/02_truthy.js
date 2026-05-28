const user = []
if(user){
    console.log("true")
} else{
    console.log("false")
}


/*
        FALSY
        false , 0 , -0 , ""(empty string) , NaN , null , undefined

        TRUTHY
        true , "false" , "0" , " " , [] , {} , and rest all
*/

const obj = {}
if(Object.keys(obj).length === 0){                      // object.keys return an array of keys
    console.log("object is empty")
}
