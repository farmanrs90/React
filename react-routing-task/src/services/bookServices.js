import { Base_Url } from "../constant"

const addNewBook=async(payload)=>{
    try {
        const responce=await axios.post(`${Base_Url}`,payload)
        return responce
        
    } catch (error) {
        console.log(error);
        
    }

}
const deleteBook=async(id)=>{
    try {
        const responce=await axios.post(`${Base_Url}/${id}`)
        return responce
        
    } catch (error) {
        console.log(error);
        
    }

}
const editBook=async(id,payload)=>{
    try {
        const responce=await axios.post(`${Base_Url}/${id}`,payload)
        return responce
        
    } catch (error) {
        console.log(error);
        
    }

}
export{editBook,deleteBook,addNewBook}