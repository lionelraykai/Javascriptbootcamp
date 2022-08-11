let myaccount = {
    name: 'leo kai',
    expensese: 0,
    income: 0
}
let otheraccount = myaccount
otheraccount.income = 1000
otheraccount = {}

let addexpenses = function(account, amount) {
    account.expensese = account.expensese + amount
    console.log(account)
}

addexpenses(myaccount, 50)
console.log(myaccount)

//addincome

//resetaccount

//getaccountsummary
//account for leo has 5000. $1000 in income. $100 in expenses.

//addincome
//addexpense
//getaccountsummary
//resetaccount
//getaccountsummary



let addincome = function(account, income){
    account.income = account.income + income
}

let resetaccount = function(account){
    account.expensese = 0
    account.income = 0
}

let getaccountsummary = function (account) {
    let balance = account.income - account.expensese
    return `leo for ${account.name} has $${balance}. ${account.income} in income $${account.expensese} expenses`

}

addincome(myaccount, 2000)
addexpenses(myaccount, 250)
addexpenses(myaccount, 160)
console.log(getaccountsummary(myaccount))

resetaccount(myaccount)
console.log(getaccountsummary(myaccount))
       
