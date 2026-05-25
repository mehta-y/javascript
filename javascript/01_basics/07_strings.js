const name = "Yuvraj"
const age = 20
console.log(`hello muy name is ${name} and I'm ${age} years old`)

const newname = String("Yuvraj-Mehta-com")

// basic methods
    console.log(newname.charAt(3))
    console.log(newname.indexOf("a"))

    console.log(newname.toUpperCase())
            // it won't change the actual text as it is in stack memory
    console.log(newname.length)

// substring
    console.log(newname.substring(0,9))

// slice
    console.log(newname.slice(0,7))
    console.log(newname.slice(-14,9))
            // here -14 means -14 characters from the very last

// trim
    const anotherstring = "  yuvraj   "
    console.log(anotherstring)
    console.log(anotherstring.trim())
            // it removes the spaces 
            // we can also use trim.start and trim.end


//replace

    const url = "http://yuvraj.com/yuvraj%20mehta"
    console.log(url.replace('%20','-'))

// includes
    console.log(newname.includes("Mehta"))
    console.log(newname.includes("dfgh"))
        // it'll give a boolean value whether or not the string includes the mentioned text



// split
    console.log(newname.split("-"))
            // this will split the string into arrays with elements seperated by "-"
