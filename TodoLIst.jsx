import TodoItem from "./TodoItem";
import "./TodoList.css"
export default function TodoList({todos, setTodos}){
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.status)-Number(b.status))
    return(
        <div className="list">
        {sortedTodos.map((item) => 
            (<TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>)
            )}
        </div> 
    );
 }