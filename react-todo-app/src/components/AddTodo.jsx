import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import Swal from 'sweetalert2'
export const AddTodo = ({ todoApp, setTodoApp }) => {
    const [todoText, setTodoText] = useState('')
    const[error,setError]=useState(false)
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todoText.trim()) {
            setError(true)
            return
            
        }

        
        const newTodoUpp = {
            todoText: todoText,
            id: nanoid(),
            createdAt: new Date().toLocaleString(),
            isCompleted: false
        }
        setTodoApp(prev => [...prev, newTodoUpp])

        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your TODO has been ADD",
  showConfirmButton: false,
  timer: 1500
});
        setError(false)
        setTodoText('')

    }

    return (
        <form onSubmit={handleSubmit} >
            <input onChange={(e) => {
                setTodoText(e.target.value) 
                    
                


            }} type="text" placeholder='write todo app' value={todoText} />

            <button type='submit'>ADD</button>
            {/* {
                error && <p>no item yet</p>     
            } */}
            {/* yaziram islemir nedi problem anlamiram */}




        </form>
    )
}
