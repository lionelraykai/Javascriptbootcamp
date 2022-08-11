const account = {
    name: 'Andrew Mead',
    expenses: [],
    income:[],
    addExpenses: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
         this.income.push({
             description: description,
             amount:amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
           totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
         totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of ${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }

}

// expense -> description, amount, 
// addExpense -> description, amount
//getAccountSummary-> total up all expenses -> Andrew Mead has $1250 in expenses.


//part 2
// add icome array to account
// addIncome method -> description, amount
// twaek getAccountSummary

// andrew mead has balance of $10. $100 in income. $90 in expense.




account.addExpenses('rent', 950)
account.addExpenses('Coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())