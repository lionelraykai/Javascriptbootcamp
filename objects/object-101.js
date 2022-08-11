let mybook = {
    title: '1984',
    auther: 'leo',
    pagecount: 346

}

console.log(`${mybook.title} by ${mybook.auther}`)

mybook.title = 'something is missing'

console.log(`${mybook.title} by ${mybook.auther}`)


let mydata = {
    name: 'andrew',
    age: 27,
    location: 'newyork'

}

console.log(`${mydata.name} is ${mydata.age} and lives in ${mydata.location}`)

 mydata.age = mydata.age + 1
console.log(`${mydata.name} is ${mydata.age} and lives in ${mydata.location}`)