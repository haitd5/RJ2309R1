
import './App.css';
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import {Routes, Route} from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  return (
    // <div className="container-fluid">
    //     {/*<HomePage/>*/}
    //     <ShopPage/>
    // </div>
      <>
        <Routes>
            <Route path={`/`} element={<HomePage/>}/>
            <Route path={`/home`} element={<HomePage/>}/>
            <Route path={`/shop`} element={<ShopPage/>}/>
            <Route path={`/cart`} element={<CartPage/>}/>
        </Routes>
      </>
  );
}

export default App;
