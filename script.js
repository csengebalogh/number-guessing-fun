const readline = require("readline")
const cl = console.log
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

cl("I generated a random integer from 0 to 10, you make a guess")
cl("I will give you hints after each guess")

var generated = (Math.round(Math.random() * 10))

rl.setPrompt("Think about an integer from 0 to 10 > ")
rl.prompt()

var tries = 3;

function secondGuess() {
    rl.on('line', ans => {
        if (ans == generated) {
            cl("masodikra eltalaltad")
            rl.close()
        } 
    })
}

rl.on('line', ans => {
    cl(ans, generated)

    if (ans == generated) {
        cl("match")
        rl.close()
    } else if (ans < generated) {
        cl("ennel nagyobbra gondolj")
        tries--
        cl("probak szama", tries)
        secondGuess()
    } else { // ans > generated
        cl("ennel kisebbre gondolj")
        tries--
        cl("probak szama", tries)
        secondGuess()
    }

    rl.close()
    // while (tries != 0) {

    //     switch(ans) {
    //         case Number(ans) == generated:
    //             cl("match")
    //             tries--
    //             break;
    //         case Number(ans) < generated:
    //             cl("ennel kisebb")
    //             tries--
    //             break
    //         case Number(ans) > generated:
    //             cl("ennel nagyobb  ")
    //             tries--
    //             break
    //     }
    // }
    
})

