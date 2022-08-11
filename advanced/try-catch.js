const getTip = (amount) => {
    if (typeof amount === 'number') {
        return(amount * .25)
    }else{
        throw Error('argument must be number')
    }
}

try {
    const result = getTip(60)
    console.log(result)
} catch (e) {
   console.log('catch running smoothly')
}

