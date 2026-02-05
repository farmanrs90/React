import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CategoryContext = createContext();


export const CategoryProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(
                    "https://northwind.vercel.app/api/categories"
                );

                setCategories(response.data);
            } catch (error) {
                console.log("Category GET error:", error);
            }
        };

        getCategories();
    }, []);

    const editCategory = (id, newName) => {
        setCategories(categories.map((c) => c.id === id ? { ...c, name: newName } : c))
    }

    const deleteCategory = (id) => {
        setCategories(
            categories.filter(category => category.id !== id)
        );
    };
    const addCategory = (name) => {
        const newCategory = {
            id: Date.now(),
            name
        }
        setCategories([...categories, newCategory])
    }


    return (
        <CategoryContext.Provider
            value={{
                categories,
                deleteCategory,
                editCategory,
                addCategory
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};


export const useCategory = () => {
    return useContext(CategoryContext);
};
