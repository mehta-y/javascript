/* {} => these are scopes
    two types of scope: global and block
    whenever we declare a variable inside a scope (function,loop,conditional etc),
    the value of that variable should not effect outside
    ex:
*/
    let a = 300
    if(true){
        let a = 10
        console.log("inner a : " , a)                  //10
    }
    console.log("a : ", a)                             // 300
    
//  this doesn't seem to happen the same way in the case of var
// var is as completely global scope
    var b = 40;
    if(true){
        var b = 80
    }
    console.log("b : " ,b)                               // 80


//++++++++++++++++++nested+++++++++++

function one(){
    let username = "Yuvraj "
    function two(){
        let lastname = "Mehta"
        console.log(username + lastname)
    }
    two();
    // console.log(lastname);         ERRRORRR
    //  child function can get access to the parent function but vice versa not true
    // in all cases such as loop and coditionals as well

}
one();



if(true){
    let name = "Sonaxy "
    if(true){
        let title = "Mehta"
        console.log(name+title)
    }
    // console.log(title)                         ERRORRR
}
// console.log(name)                              ERRORRR as it  is outside of the scope




console.log(addone(5))
function addone(num){
    return num+1
}
/// this will work


console.log(addtwo(6))
const addtwo = function(num){
    return num +2
}
// but this will not
// that's the difference between declaring function directly and y declaring a variable as a function

