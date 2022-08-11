const getDataPromises = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})




const processData = async () => {
     let data = await getDataPromises(2)
     data = await getDataPromises(data)
     data = await getDataPromises(data)
     return data
     console.log(data)

}


processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})