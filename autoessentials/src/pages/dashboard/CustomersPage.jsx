import React from "react";
import MainDashboard from "../../components/dashboard/mainDashboard/MainDashboard";
import DashboardLayout from "../../layouts/DashboardLayout";
import Customer from "../../components/dashboard/customer/Customer";

function CustomersPage() {
	return (
		<>
			<DashboardLayout>
				<Customer/>
			</DashboardLayout>
		</>
	)
}
export default CustomersPage