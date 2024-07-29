import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import SidebarInputs from "./components/SidebarInputs";
import store from "./redux/store";
import { useState } from "react";
import Carts from "./components/Carts";

function App() {
  const [cartMode, setCartMode] = useState(false);

  const handleGOCart = () => {
    setCartMode(true);
  };

  const handleGOHome = () => {
    setCartMode(false);
  };

  return (
    <Provider store={store}>
      <header id="header">
        <Navbar handleGOHome={handleGOHome} handleGOCart={handleGOCart} />
      </header>

      <div className="w-full grid place-items-center">
        {cartMode ? (
          <Carts />
        ) : (
          <div className="flex items-start justify-center md:w-[1100px] w-[95%] gap-2 flex-col-reverse md:flex-row">
            <div className="md:w-[75%] w-full">
              <ProductList />
            </div>
            <div
              id="sidebar"
              className="md:w-[35%] w-[100%] flex items-start justify-center md:sticky top-0 left-0"
            >
              <SidebarInputs />
            </div>
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
