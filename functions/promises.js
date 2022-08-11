// callback
const getdatacallback = (num, callback) => {
    setTimeout(() => {
     if (typeof num === "number") {
         callback(undefined, num * 2)
     }else {
         callback('Number must be provided')
     }
     }, 2000)
}

getdatacallback(2, (err, data) => {
    if (err) {
     console.log(err)
    }else {
     getdatacallback(data, (err, data) => {
         if (err) {
             console.log('err')
         }else {
             console.log(data)
         }
     })
    }
})

//  Promise 
const getDataPromises = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})



getDataPromises(2).then((data) => {
   getDataPromises(data).then((data) => {
       console.log(`promise data: ${data}`)
   }, (err) => {
       console.log(err)
   })
}, (err) => {
    console.log(err)

})

getDataPromises(10).then((data) => {
    return getDataPromises(data)
}).then ((data) => {
    return 'this is some text data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})