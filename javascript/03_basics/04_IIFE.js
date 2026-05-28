// immediately invoked function expression

(function user1(){
    console.log("Yuvraj")
})();
// the parenthesis at last invokes the function but end it with a semi colon as it doesn't know when to stop
// (function hii(){
//     console.log("hiii")
// })();
// it ill not run agar hum waha semicolon upar wale mein na dete to


((name)=>{
    console.log(`${name}`)
})("Sonaxy");