const readline = require("readline")

const cl = console.log

function genNumber () {
    return (Math.round(Math.random() * 10))
}


var generated = genNumber()


cl("I generated a random integer from 0 to 10, you make a guess")
cl("I will give you hints after each guess")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



rl.setPrompt("Think about an integer from 0 to 10 > ")
rl.prompt()
// rl.on('line', (age) => {
//     console.log(`Age received by the user: ${age}`);
//     rl.close();
// });


rl.on('line', (ans) => {
    // var generated = genNumber()

    cl("Your guess:", ans)
    cl("Generated:", generated)

    if (generated == ans) {
        cl("match")
        rl.close()
    } else {
        cl("no match")
        newGuess()
    }


})

//kell egy ciklus  csak nemtudom hova 

function newGuess () {
    rl.setPrompt("Make a new guess > ")
    rl.prompt()
    rl.on('line', (ans) => {
        if (ans == generated) {
            cl("match")
        } else {
            cl("no match second time")
        }
    })
}