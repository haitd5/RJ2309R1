import React from "react";
import SidebarDashboard from "../../components/dashboard/SidebarDashboard";
import NavbarDashboard from "../../components/dashboard/NavbarDashboard";
import OrderList from "../../components/dashboard/OrderList";
import DashboardLayout from "../../layouts/DashboardLayout";

function OrderManagementPage() {
	return (
		<DashboardLayout>
			<OrderList/>
		</DashboardLayout>
	)
}
export default OrderManagementPage;