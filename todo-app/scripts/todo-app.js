'use strict'
let todos = getSavedTodos ()

const filters = {
    searchText: '',
    hideCompleted: false
}
rendertodos(todos, filters)



document.querySelector('#new-todo').addEventListener('submit', (e) => {
     const text = e.target.elements.text.value.trim()
     e.preventDefault()
     if(text.length > 0) {
        todos.push({
       
            text,
            completed: false
        })
    
        saveTodos(todos)
        rendertodos(todos, filters)
        e.target.elements.firstName.value = ''
     }


    
    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
   filters.hideCompleted = e.target.checked
   rendertodos(todos, filters)
})