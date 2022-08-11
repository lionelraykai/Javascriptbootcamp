//global scope (convertfahrenheitocelsius, tempone, temptwo)
//local scope (fahrenheit, celsius)
// local scope (isfreezing)


let convertfahrenheitocelsius = function (fahrenheit) {
    let celsius = (fahrenheit -32) * 5 / 9
    
    if (celsius <= 0) {
        let isfreezing = true
    }
    return celsius
}

let tempone = convertfahrenheitocelsius(30)
let temptwo = convertfahrenheitocelsius(68)

console.log(tempone)
console.log(temptwo)