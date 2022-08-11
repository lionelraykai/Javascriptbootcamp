let isguestonevegan = false
let isguesttwovegan = false

if (isguestonevegan && isguesttwovegan) {
console.log('only offer up vegan dishes')
} else if (isguestonevegan || isguesttwovegan) {
console.log('make sure to offer up some vegan options')
} else {
    console.log('order something else')
}