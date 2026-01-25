import React from 'react'

import { DeleteTodo } from './DeleteTodo'

export const TodoItem = ({ todo, setTodoApp,setSelected}) => {
    if (todo.length === 0) {
        return (<p>item yoxdur hele</p>)

    }



    return (
        <li >
            <input type="checkbox" onChange={(e)=>{
                console.log(e.target.checked);
                if (e.target.checked) {
                    setSelected((prev)=>[...prev,todo.id])
                    
                }else{
                    setSelected((prev)=>prev.filter((c)=>{c!==todo.id}))
                }
                
            }} /> <strong> {todo.todoText}</strong> <small>{todo.createdAt}</small>
            <DeleteTodo todo={todo} setTodoApp={setTodoApp} />



        </li>
    )
}
