import { DeleteTodo } from "./DeleteTodo"
import { TodoItem } from "./TodoItem"

export const TodoList = ({todoApp,setTodoApp,setSelected}) => {
  return (
    <ul>
        {
            todoApp.map((todo)=>{
                return <TodoItem key={todo.id} setTodoApp={setTodoApp} todo={todo} setSelected={setSelected}/>
            })
        }
    </ul>
  )
}
