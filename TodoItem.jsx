import "./TodoItem.css";
export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>todo !== item))
    }
    function handleClick(name){
        setTodos(todos.map((todo)=>todo.name===name ? {...todo, status: !todo.status} :todo ))
    }
    const classname = item.status ? "complete" : " ";
    return(
        <div className="container">
        <div className="listItem"><span className={classname} onClick={()=>handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={()=>handleDelete(item)} className="deleteButton"> x </button>
            </span>
        </div>
        <hr className="line"/>
        </div>
    );
}
