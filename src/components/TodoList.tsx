import React from 'react'
import styles from "../styles/todolist.module.scss";
import Todo from "./Todo"

type TodoListProps = {
    todos : Array<any>
    setTodos : Function
    filteredTodos : any
}
interface ITodo {
    content : string,
    completed : boolean,
    id : number
  }


const TodoList : React.FC <TodoListProps>= (props) => {
    return(
        <div className="todo-container">
            <ul className={styles.todoList}>
                {props.filteredTodos.map((todo: ITodo) => (
                    <Todo 
                    setTodos={props.setTodos}
                    todos={props.todos}
                    todo={todo as ITodo}
                    content={todo.content as string} 
                    key={todo.id} 
                    completed={todo.completed}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList