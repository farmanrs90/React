import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2'
export const DeleteTodo = ({todo,setTodoApp}) => {
const handleDelete = (todoid)=>{
    console.log(todoid);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) { setTodoApp((prave)=>prave.filter((c)=>c.id !==todoid))
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

    
   
}
  return (
    <button onClick={()=>handleDelete(todo.id)}  > <FaRegTrashCan /></button>
  )
}
