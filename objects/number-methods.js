let num = 103.555

console.log(num.toFixed(10))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5
let randomnum = Math.floor(Math.random() * (max - min + 1)) + min

//challenge area
//1-5-true if correct - false if not correct
let makeGuess = function (guess){
    let min = 1
    let max = 5
    let randomnum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomnum
}

console.log(makeGuess(1))