import React from "react";
import SidebarDashboard from "../../components/dashboard/sidebar/SidebarDashboard";
import NavbarDashboard from "../../components/dashboard/nabar/NavbarDashboard";
import ProductListManagement from "../../components/dashboard/productMangement/ProductListManagement";

function ProductManagementPage() {
	return (
		<>
			<div className={`d-flex`}>
				<div className={`w-auto`}>
					<SidebarDashboard/>
				</div>
				<div className={`col`} style={{background: "#F3F3F3"}}>
					<NavbarDashboard/>
					<ProductListManagement/>
				</div>
			</div>
		</>
	)
}
export default ProductManagementPage