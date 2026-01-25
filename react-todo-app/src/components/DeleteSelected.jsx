import React, { useState } from 'react'

export const DeleteSelected = ({selected,setSelected,todoApp,setTodoApp}) => {
 const handleDeleteSelected =()=>{
  console.log(selected);
setTodoApp((prev)=>prev.filter((todo)=>!setSelected.includes(todo.id)))
  
 }
  return (
    <button onClick={()=>{handleDeleteSelected()}}>DeleteSelected</button>
  )
}

