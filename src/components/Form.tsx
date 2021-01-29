import React from 'react'
import styles from "../styles/form.module.scss"

type TodoListProps = {
    todos : any[]
    setTodos : Function
    inputText : string
    setInputText : Function
}

const Form: React.FC <TodoListProps> = (props) => {
    const inputTextFunc = (e:React.ChangeEvent<HTMLInputElement>) =>{
        props.setInputText(e.target.value)
    }
    const submitTodoFunc = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        props.setTodos([
            ...props.todos, {content:props.inputText,completed:false, id:Math.random() * 500}
        ])
        props.setInputText("")
    }
    const completeAllFunc = (e:React.MouseEvent<SVGSVGElement>) => {
        props.setTodos(props.todos.map(item => {
            while(item.completed === false){
                return {
                    ...item, completed : true
                }
            }
            return item
        }))
    }
    const uncompleteAllFunc = (e:React.MouseEvent<SVGSVGElement>) => {
        props.setTodos(props.todos.map(item => {
            while(item.completed === true){
                return{
                    ...item, completed: false
                }
            }
            return item
        }))
    }
    return (
        <form onSubmit={submitTodoFunc} 
        className={styles.form}>
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={completeAllFunc} onDoubleClick={uncompleteAllFunc} className={styles.checkAllIcon} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
             </svg>
          <input value={props.inputText} 
            onChange={inputTextFunc}
            type="input"
            placeholder="What needs to be done?"
            className={styles.input}
            id="addinput"
          />
        </form>
    )
}

export default Form