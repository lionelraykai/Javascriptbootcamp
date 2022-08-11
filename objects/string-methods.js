let name = '    lionel kai ray'

//length property
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())

//covert to lowercase
 console.log(name.toLowerCase())

 //include methods
 let password = 'silvercoin'
 console.log(password.includes('silvercoin'))


 //trim
 console.log(name.trim())

 //challange area
 

//  let isvalidpassword = function(password) {
//      return password.length > 8 && !password.includes('password')
//  }

//  console.log(isvalidpassword('asdfpesgfg'))
//  console.log(isvalidpassword('abc123!@#$%^&*'))
//  console.log(isvalidpassword('asdfpasdfpoij'))

let isvalidpassword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isvalidpassword('silvercoin'))
console.log(isvalidpassword('ja'))
console.log(isvalidpassword('password'))
