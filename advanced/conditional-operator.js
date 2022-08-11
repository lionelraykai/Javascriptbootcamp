// const myage = 2
// const massage = myage >= 18 ? 'you can vote' : 'you cannot vote'
// console.log(massage)


const myage = 20
const showpage = () => {
    return 'showing the page'
}
const showerrorpage = () => {
    return 'showing the error page'
}
const massage = myage >= 21 ? showpage() : showerrorpage()
console.log(massage)

const team = ['luffy', 'zoro', 'sanji', 'jimbe']
console.log(team.length >= 3 ? `the team ${team.length} members` : 'the team has more than we can told')
