import React from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import OrderList from "../../components/dashboard/oderList/OderList";

function OrderManagementPage() {
	return (
		<DashboardLayout>
			<OrderList/>
		</DashboardLayout>
	)
}
export default OrderManagementPage;