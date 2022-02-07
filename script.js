const readline = require("readline")

const cl = console.log

cl("Welcome to my Guess The Number game")
cl("I generate a random integer from 0 to 10, you make a guess")
cl("I will give you hints after each guess")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//kell egy ciklus  csak nemtudom hova 

rl.question("Think about an integer from 0 to 10 > ", (ans) => {

    var generated = genNumber()

    cl("Your guess:", ans)
    cl("Generated:", generated)

    if (generated == ans) {
        cl("Match!")
    } else if (ans > generated) {
        cl("That's too much.")
    } else {
	cl("A bit more.") 
}
    rl.close()
    


})

function genNumber () {
    return (Math.round(Math.random() * 10))
}
