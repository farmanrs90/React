import { CategoryProvider } from "./context/CategoryContext";
import { WishlistProvider } from "./context/WishlistContext";
import { BasketProvider } from "./context/BasketContext";
import CategoryList from "./pages/categories/CategoryList";
function App() {
  return (
    <CategoryProvider>
      <WishlistProvider>
        <BasketProvider>
          <CategoryList />
        </BasketProvider>
      </WishlistProvider>
    </CategoryProvider>
  );
}

export default App;
