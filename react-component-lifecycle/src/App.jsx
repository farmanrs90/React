import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Welcome from "./components/Welcome";
import Product from "./components/Product";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {!isLogged ? (
        <Login setIsLogged={setIsLogged} />
      ) : (
        <>
          <Welcome />
          <Logout setIsLogged={setIsLogged} />
        </>
      )}

      {!isLogged ? (
        <p>You should login to see products</p>
      ) : (
        <Product />
      )}
    </>
  );
}

export default App;
