const addTodo = ({title, content}) => 
  fetch('/add-todo', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title,
      content,
    })
})
const markTodo = ({title, content}) => 
  fetch('/done-mark', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title,
      content
    })
})    

const updateTodo = ({id, title, content, mark}) => 
  fetch('/update-todo',{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id, title, content, mark})
  })

const getAllTodo = () =>  fetch('/get-todo')
const deleteTodo = ({id}) => fetch(`delete-todo/${id}`, {method: 'DELETE'})
  

