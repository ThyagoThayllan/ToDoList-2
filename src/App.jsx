import { useState } from "react"
import { Todo } from "./components/ToDo/Todo"
import styles from './App.module.css'
import { ToDoForm } from "./components/ToDoForm/ToDoForm"

export function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (text, category) => {
    const todoProps = {
      text,
      category,
      isCompleted: false
    }

    const newTodos = [...todos, todoProps]

    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todosWithoutTodoDeleted = todos.filter((todo) => todo.text !== text)

    setTodos(todosWithoutTodoDeleted)
  }

  const invertTodoStatus = (text) => {
    const todosWithStatusUpdated = todos.map((todo) => {
      if (todo.text === text) {
        return {...todo, isCompleted: !todo.isCompleted};
      }
      return todo
    })

    setTodos(todosWithStatusUpdated)
  }

  return (
    <div className={styles.app}>
      <h1>Lista de Tarefas</h1>
      <ToDoForm addTodo={addTodo} />
      <div className={styles.toDoList}>
        {todos.map((todo) => (
          <Todo
            key={todo.text}
            todo={todo}
            isCompleted={todo.isCompleted}
            deleteTodo={deleteTodo}
            invertTodoStatus={invertTodoStatus}
          />
        ))}
      </div>
    </div>
  )
}