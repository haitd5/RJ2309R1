
import './App.css';
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import {Routes, Route} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LikeItemCartPage from "./pages/LikeItemCartPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import OrderManagementPage from "./pages/dashboard/OrderManagementPage";
import ProductManagementPage from "./pages/dashboard/ProductManagementPage";

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
            <Route path={`/checkout`} element={<CheckoutPage/>}/>
            <Route path={`/like`} element={<LikeItemCartPage/>}/>
            <Route path={`/product/detail/:id`} element={<ItemDetailPage/>}/>
            <Route path={`/dashboard`} element={<DashboardPage/>}/>
            <Route path={`dashboard/orders`} element={<OrderManagementPage/>}/>
            <Route path={`/dashboard/products`} element={<ProductManagementPage/>}/>
        </Routes>
      </>
  );
}

export default App;
