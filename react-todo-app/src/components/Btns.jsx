import { ClearAll } from './ClearAll'
import { DeleteSelected } from './DeleteSelected'

export const Btns = ({ setTodoApp, todoApp,selected,setSelected }) => {
    return (
        <>
           
            <DeleteSelected selected={selected} setSelected={setSelected} todoApp={todoApp} setTodoApp={setTodoApp}/>
           
            <ClearAll setTodoApp={setTodoApp} />


        </>
    )
}
