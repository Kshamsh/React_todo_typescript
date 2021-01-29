import React,{useState,useEffect} from 'react';
import styles from './styles/app.module.scss'
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"



const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos,setTodos] = useState<Array<any>>([])
  const [currentStatus,setCurrentStatus] = useState("All")
  const [filteredTodos, setFilteredTodos] = useState<object[]>([])

  const filterFunc = () => {
    switch (currentStatus) {
      case "Completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  useEffect(()=>{
    filterFunc()},[ todos , currentStatus])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
          <header className={styles.headerContainer}>
            <h1 className={styles.header}>todos</h1>
          </header>
          <Form 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}/>
          <TodoList 
          todos={todos} 
          setTodos={ setTodos as any}
          filteredTodos={filteredTodos}
          />
          <Footer 
          setTodos={setTodos} 
          todos={todos}
          setCurrentStatus={setCurrentStatus}
          />
        </div> 
    </div>
  );
}

export default App;
