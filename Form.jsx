import { useState } from "react";
import "./Form.css";
export default function Form({todos, setTodos}){
    const [todo,setTodo] = useState({name:"", status:false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", status:false});
    }
    return(
        <form onSubmit={handleSubmit} className="form">
            <div className="mainDiv">
                <input className="input" onChange={(e)=>setTodo({name:e.target.value, status:false})} value={todo.name} type="text" placeholder="Enter the Task..." />
                <button className="button" type="submit">Add</button>
            </div>
        </form>
    );
}