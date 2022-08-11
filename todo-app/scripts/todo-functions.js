'use strict'
// fetch existing todos from localstorage

const getSavedTodos =  () => {
    const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON): []
  }catch(e) {
    return []
  }


    
// if (todosJSON !== null) {
//     return JSON.parse(todosJSON)
// }else {
//     return []
//    }
 }

// save todos to localstorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}


// toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)
  
  if(todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}
// render application todos based on filter
const rendertodos = ( todos, filters) => {
  const todoEl = document.querySelector('#todos')
    const filtertodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filtertodos.filter((todo) => !todo.completed)
   
   todoEl.innerHTML = ""
   todoEl.appendChild(genrateSummaryDOM(incompleteTodos))

 

   if (filtertodos.length > 0) {
    filtertodos.forEach((todo) => {
      todoEl.appendChild(genratetodoDOM(todo))
      })
   }else {
     const massageEl = document.createElement('p')
     massageEl.classList.add('empty-massage')
     massageEl.textContent = 'there is No to-dos to show'
     todoEl.appendChild(massageEl)
   }
}

// get the DOM elements for an individual note
const genratetodoDOM = (todo) => {
   const todoEl = document.createElement('label')
   const containerEl = document.createElement('div')
   const checkbox = document.createElement('input')
   const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
     containerEl.appendChild(checkbox)
     checkbox.addEventListener('change', () => {
       toggleTodo(todo.id)
       saveTodos(todos)
       rendertodos(todos, filters)
     })

    //  setup todotext span
     todoText.textContent = todoText
     containerEl.appendChild(todoText)

       //  setup container
     todoEl.classList.add('list-item')
     containerEl.classList.add('list-item__container')
     todoEl.appendChild(containerEl)

    //  setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
     removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        rendertodos(todos, filters)
     })



   return todoEl
}

// get the DOM elements for list summary
const genrateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `you have ${incompleteTodos.length} todo${plural} left`
    return summary
}