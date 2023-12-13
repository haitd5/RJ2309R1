import React from "react";
import SidebarDashboard from "../../components/dashboard/SidebarDashboard";
import NavbarDashboard from "../../components/dashboard/NavbarDashboard";
import OrderList from "../../components/dashboard/OrderList";
import ProductListManage from "../../components/dashboard/ProductListManage";

function ProductManagementPage() {
	return (
		<>
			<div className={`d-flex`}>
				<div className={`w-auto`}>
					<SidebarDashboard/>
				</div>
				<div className={`col`} style={{background: "#F3F3F3"}}>
					<NavbarDashboard/>
					<ProductListManage/>
				</div>
			</div>
		</>
	)
}
export default ProductManagementPage