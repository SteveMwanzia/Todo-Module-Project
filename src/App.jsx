import { useState } from 'react'
import './App.css'
import Heading from './Components/Heading'
import Body from './Components/Body'
import Items from './Components/Items'

function App() {
  const [todos, setTodos] = useState([])
  // const [filter, setFilter] = useState('all')

  // function to add a new toDo

  const addTodo = (text) => {
    const newTodo = {
      id:Date.now(),
      todoTitle: text,
      complete: false,
    }
    setTodos([newTodo, ...todos])
  }

  // Function to delete item from list
  const removeTodoById = (id) => {
    const newList = todos.filter(todo => todo.id !== id)
    setTodos(newList)
  }

  // function to set status
  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return{...todo, complete: !todo.complete}
        }
        return todo
      })
    )
  }

  //  Function to delete completed items
  // const clearCompletedTodos = () => {
  //   const todoItems = todos.filter(todo => !todo.complete)
  //   setTodos(todoItems)
  // }

  // Function to update filter value 
  // const setFilterValue = (value) => setFilter(value)

  // Fuction to render todo based on filver value
  // const renderTodos = () => {
  //   let filteredList;
  //   if(filter === 'all') {
  //     filteredList = todos;
  //   } else if (filter === 'active') {
  //     filteredList = todos.filter(todo => !todo.complete)
  //   } else if(filter === 'complete') {
  //     filteredList = todos.filter(todo => todo.complete)
  //   }

  //   return filteredList.map(todo => (
  //     <Items key={todo.id} data={todo} deleteHandler={removeTodoById} updateStatus={toggleTodoStatus}/>
  //   ))
  // }

  return (
    <>
      <Heading addHandler={addTodo}/>
      <Body addHandler={addTodo} todos={todos} setTodos={setTodos} deleteHandler={removeTodoById} updateStatus={toggleTodoStatus}/>
    </>
  )
}



export default App
