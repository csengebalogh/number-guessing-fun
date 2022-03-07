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

var tries = 3


rl.on('line', ans => {
    let answer = global.ans
})

 // ASYNC AWAIT 

while (tries != 0) {

    switch(answer) {
        case answer == generated:
            cl("match")
            break;
        case answer < generated:
            cl("ennel kisebb")
            break
        case answer > generated:
            cl("ennel nagyobb  ")
            break
    }
}
