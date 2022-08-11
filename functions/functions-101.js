// functions - input (argument), code, output (return value)

let greetuser = function () {
    console.log('welcome user')
}

greetuser()
greetuser()
greetuser()
greetuser()


let circle = function (num) {
    let result = num * num
    return result 
}

let value = circle(45)
let othervalue = circle(89)

console.log(value)
console.log(othervalue)

let convertfahrenheitocelsius = function(fahrenheit) {
    let celsius = (fahrenheit -32) * 5 / 9  
    return celsius
}

let tempone = convertfahrenheitocelsius(30)
let temptwo = convertfahrenheitocelsius(68)

console.log(tempone)
console.log(temptwo)

let incomeandsaving = function(income){
    let saving = (income-100) * 2
    return saving
}

let incomeone = incomeandsaving(5000)
let incometwo = incomeandsaving(4000)

console.log(incomeone)
console.log(incometwo)