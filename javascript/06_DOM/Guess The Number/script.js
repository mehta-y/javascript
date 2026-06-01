let randomNumber = parseInt(Math.random()*200+1);

let userinput = document.querySelector(".guessfield")
const submit = document.querySelector(".sbt")
const guessSlot = document.querySelector(".guesses")
const lowORhigh = document.querySelector(".LOWorHIGH")
const remaining = document.querySelector(".lastguess")
const startover = document.querySelector(".results")

let p = document.createElement("p")

let prevguesses = []
let numguess = 1;
let playgame = true

if(playgame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess)

    })
}

function validateguess(guess){
    //  will check whether or not the check is valid
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess<1){
        alert("Entered number should be greater than 0")
    } else if(guess>200){
        alert("Entered numberr must be less than 200")
    } else{
        prevguesses.push(guess)
        if(numguess===10){
            displayguess(guess)
            displaymessage(`Game OVER ! Random number was ${randomNumber}`)
            endgame()
        } else{
            displayguess(guess)
            checkguess(guess)
        }

    }
    
}
function checkguess(guess){
    //  will actually check if the guess is lower or higher
    if(guess === randomNumber){
        displaymessage(`Congrats!You guessed it right.`)
        endgame()
        newgame()
    } else if(guess<randomNumber){
        displaymessage(`The number is higher ↑`)
    } else{
        displaymessage(`The number is lower ↓`)
    }
}
function displayguess(guess){
    // will show the previous guesses
    numguess++
    userinput.value = ""
    guessSlot.innerText += `${guess} , `
    remaining.innerHTML = `<h3>${11-numguess}</h3>`
}
function displaymessage(message){
    //  will display the message provides by the function "checkguess"
    lowORhigh.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
    //  will finally end the game
    userinput.value=""
    userinput.setAttribute("disabled","")   /// usually used in a form to disable it's inputs
    // displaymessage("GameOVER!!")
    p.classList.add("button")
    p.innerHTML = `<button id="newgame">Start New Game</button>`
    startover.appendChild(p)
    playgame=false
    newgame();
}
function newgame(){
    //  will start a new game
    const newgamebtn = document.querySelector("#newgame")
    newgamebtn.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random()*200+1);
    prevguesses = []
    numguess=0
    guessSlot.innerHTML= ``
    remaining.innerHTML= "10"
    userinput.removeAttribute("disabled")
    startover.removeChild(p)
    playgame=true
    })
}


