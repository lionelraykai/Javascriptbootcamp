let mybook = {
    title: '1920',
    author: 'leo',
    pagecount: 345
}

let otherbook = {
    title: 'a people color',
    author: 'kai',
    pagecount: 678
}

let getsummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pagecountsummary: `${book.title} is ${book.pagecount} pages long`
    }
}

let booksummary = getsummary(mybook)
let otherbooksummary = getsummary(otherbook)

console.log(booksummary.pagecountsummary)
console.log(otherbooksummary.pagecountsummary)

//creat function - take fahrenheit in - return object with all three

let convertfahren = function (fahrenheit) {
    return{
        fahrenheit: (fahrenheit),
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let temp = convertfahren(119)
console.log(temp)
