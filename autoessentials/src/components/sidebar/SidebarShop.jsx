import React from "react";
import Category from "./Category";
import Price from "./Price";
import Rating from "./Rating";
import SearchText from "./SearchText";

function SidebarShop() {
	return (
		<div className="d-flex flex-column border-end me-1 h-100 p-3 text-dark" style={{color: '#F5F4F2'}}>
			<SearchText/>
			<Category/>
			<Price/>
			<Rating/>
		</div>
	)
}
export default SidebarShop;