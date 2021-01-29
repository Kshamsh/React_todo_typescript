import React from 'react'
import styles from "../styles/footer.module.scss"

type TodoListProps = {
    todos : any[]
    setTodos : Function
    setCurrentStatus : Function
}

const Footer :React.FC <TodoListProps>= (props) => {
    const removeCompletedFunc = (e: React.MouseEvent<HTMLButtonElement>)=> {
       props.setTodos(props.todos.filter((el) =>  el.completed !== true ))
    }
    const statusFunc = (e: React.MouseEvent<HTMLElement>) =>{
      props.setCurrentStatus((e.target as any).value)
    }
   return(
         <footer className={styles.hide}>
         <div>
           <span id="total">{props.todos.filter(todo => todo.completed === false).length} </span>
           items left
         </div>
         <div className="display">
           <button onClick={statusFunc} className={styles.btn}value="All">All</button>
 
           <button onClick={statusFunc} className={styles.btn}value="Active">Active</button>
 
           <button onClick={statusFunc} className={styles.btn}value="Completed">Completed</button>
         </div>
         <button onClick={removeCompletedFunc} className={styles.btn}>Clear completed</button>
       </footer>
     )
 }

export default Footer
