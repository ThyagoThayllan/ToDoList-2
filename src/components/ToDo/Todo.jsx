import { useState } from "react";
import styles from "./Todo.module.css";

export const Todo = ({ todo, isCompleted, deleteTodo, invertTodoStatus }) => {
  const [todoStatus, setTodoStatus] = useState(isCompleted);

  const handleDeleteTodo = () => {
    deleteTodo(todo.text);
  };

  const handleStatusTodo = () => {
    setTodoStatus(!todoStatus);

    invertTodoStatus(todo.text);
  };

  return (
    <div className={styles.toDo}>
      <div className={styles.status}>
        {todoStatus === true ? (
          <span className={styles.completed}>&#10004;</span>
        ) : (
          <span className={styles.pending}>&#10006;</span>
        )}
      </div>
      <div className={styles.content}>
        <p>{todo.text}</p>
        <p className={styles.category}>({todo.category})</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.complete} onClick={handleStatusTodo}>
          Completar
        </button>
        <button className={styles.delete} onClick={handleDeleteTodo}>
          Deletar
        </button>
      </div>
    </div>
  );
};
