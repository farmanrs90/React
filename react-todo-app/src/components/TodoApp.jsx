import { useState } from "react"
import { AddTodo } from "./AddTodo"
import { Btns } from "./Btns"
import { TodoList } from "./TodoList"

export const TodoApp = () => {
    const [todoApp, setTodoApp] = useState([])
     const [selected,setSelected]=useState([])
    return (
        <>
            <h1>Todo App</h1>
            <AddTodo todoApp={todoApp} setTodoApp={setTodoApp} />
            {
                todoApp.length !== 0 && <Btns setTodoApp={setTodoApp} todoApp={todoApp} selected={selected} setSelected={selected} />
            }
            <hr />
            <TodoList todoApp={todoApp} setTodoApp={setTodoApp} setSelected={setSelected} />



        </>
    )
}
