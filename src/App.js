import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import SidebarInputs from "./components/SidebarInputs";

function App() {
  return (
    <div>
      <header id="header">
        <Navbar />
      </header>
      <div className="w-full grid place-items-center">
        <div className="flex items-start justify-center md:w-[1100px] w-[95%] gap-2 flex-col-reverse md:flex-row">
          <div className="md:w-[75%] w-full">
            <ProductList />
          </div>
          <div id="sidebar" className="md:w-[35%] w-[100%] flex items-start justify-center md:sticky top-0 left-0">
            <SidebarInputs />
          </div>
        </div>
      </div>
      {/* <div id="sidebar" className="w-[100%] flex items-start justify-center">
        <SidebarInputs />
      </div>
      <div id="content1">
        <ProductList />
      </div> */}
    </div>
  );
}

export default App;
