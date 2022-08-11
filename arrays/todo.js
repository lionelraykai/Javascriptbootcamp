

const todos = [{
    text: 'order cat food',
    completed: true
}, {
    text: 'clean kitchen',
    completed: false

}, {
    text: 'buy food',
    completed: true
}, {
    text: 'do work',
    completed: false
}, {
    text: 'exercise daily',
    completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        }else if (!b.completed && a.completed) {
            return 1
        }else {
            return 0
        }
    })
}



const deletetodo = function (todos, todotext) {
    const index = todos.findIndex(function (todo) {
      return todo.text.toLowerCase() === todotext.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getthingstodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed 
    })
}


// console.log(getthingstodo(todos))


// deletetodo(todos, '!!buy food')
// console.log(todos)


sortTodos(todos)
console.log(todos)


