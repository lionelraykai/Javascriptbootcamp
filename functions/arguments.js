//multiple argumnets
let add = function (a, b, c) {
    return(a + b + c)
}

let result = add(10, 1, 5)
console.log(result)

// default arguments
let getscoretext = function (name = 'anything', score = 0) {
    return `Name: ${name} - score: ${score}`
   //return 'Name: ' + name + ' - score: ' + score
}

let scoretext = getscoretext(undefined, 98)
console.log(scoretext)

//challenge area
//total, tippercent .2

let gettip = function (total, tippercent = .2) {
    let percent = tippercent * 100
    let tip = total * tippercent
    return `a ${percent}% tip on $${total} would be $${tip}`
    return total * tippercent
}

let tip = gettip(60)
console.log(tip)

//a 25% tip on $40 would be $10