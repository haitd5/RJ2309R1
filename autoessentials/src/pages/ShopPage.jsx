import React from "react";
import Header from "../components/header/Header";
import BannerShop from "../components/banner/BannerShop";
import SidebarShop from "../components/sidebar/SidebarShop";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import Delivery from "../components/delivery/Delivery";

function ShopPage() {
	return (
		<>
			<Header/>
			<BannerShop/>
			<div className='d-flex'>
				<div style={{ minWidth: "180px" }}>
					<SidebarShop/>
				</div>
				<div className='flex-grow-1'>
					<Products/>
				</div>
			</div>
			<Delivery/>
			<Footer/>
		</>
	)
}
export default ShopPage