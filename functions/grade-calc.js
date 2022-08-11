//student score, total possible score
// 15/20 -> you got a C (75%)!
// A 98-100, B 80-89, C 70-79, D 68-69, F 0-50
let salary = function(basic, overtime){
    let total = basic + overtime
    let position = ''

    if (total >= 10000) {
        position = 'CEO'
    }
    else if (total >= 9000) {
        position = 'HR'
    }
    else if (total >= 8000) {
        position = 'DEVELPOER'
    }
    else {
        position = 'DESIGNER'
    }
    return `i am a ${position} with ${total} salary`
}

let kai = salary(10000, 2000)
console.log(kai)






let getruns = function (test, odi) {
if ( typeof test !== 'number' || typeof odi !== 'number'){
    throw Error('please provide the nummber only')
   }

   let state = test + odi
   let ranking = ''

   if (state >= 8000) {
       ranking = '1'
   }
   else if (state >= 7000) {
       ranking = '2'
   }
   else if (state >= 6000) {
       ranking = '3'
   }
   else {
       ranking = '4'
   }
   return `you got a ${ranking} (${state})`



}

try {
    let result = getruns(656, true)
    console.log(result)
} catch (e) {
    console.log('carch is running')
}