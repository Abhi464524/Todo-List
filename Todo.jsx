import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoLIst";
import Footer from "./Footer";

function Todo(){
    const [todos,setTodos] = useState([]);
    const completedTodos = todos.filter((todo)=>todo.status).length
    const totalTodos = todos.length
    return(
        <>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </>
    );
}
export default Todo;