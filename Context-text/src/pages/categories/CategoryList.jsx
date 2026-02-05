import { useState } from "react";
import { useCategory } from "../../context/CategoryContext";
import { useBasket } from "../../context/BasketContext";
import { useWishlist } from "../../context/WishlistContext";

const CategoryList = () => {
    const { categories, deleteCategory, editCategory, addCategory } = useCategory();
    const { addToBasket } = useBasket();
    const { addToWishlist } = useWishlist();

    const [editId, setEditId] = useState(null);
    const [newName, setNewName] = useState("");
    const [addName, setAddName] = useState("");

    return (
        <div className="category-container">
            <h2 className="category-title">Category List</h2>

            <div className="add-category">
                <input
                    type="text"
                    placeholder="New category name"
                    value={addName}
                    onChange={(e) => setAddName(e.target.value)}
                />
                <button
                    onClick={() => {
                        if (!addName.trim()) return;
                        addCategory(addName);
                        setAddName("");
                    }}
                >
                    Add
                </button>
            </div>

            {categories.map((category) => (
                <div key={category.id} className="category-card">
                    {editId === category.id ? (
                        <>
                            <input
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                            <button
                                onClick={() => {
                                    if (!newName.trim()) return;
                                    editCategory(category.id, newName);
                                    setEditId(null);
                                    setNewName("");
                                }}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <h3 className="category-name">{category.name}</h3>

                            <div className="category-buttons">
                                <button onClick={() => addToBasket(category)}>
                                    Add to Basket
                                </button>
                                <button onClick={() => addToWishlist(category)}>
                                    Add to Wishlist
                                </button>
                                <button
                                    onClick={() => {
                                        setEditId(category.id);
                                        setNewName(category.name);
                                    }}
                                >
                                    Edit
                                </button>
                                <button onClick={() => deleteCategory(category.id)}>
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
