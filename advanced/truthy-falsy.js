const products = [{name: 'com'}]
const product = products[0]

// Truthy - values that resolves to true in boolean context
// falsy - values that resolves to falsy in boolean context 
//  falsy value - false, 0, empty string, null, undefined, NoN


if (product) {
    console.log('product is found')
} else {
    console.log('product is not found')
}