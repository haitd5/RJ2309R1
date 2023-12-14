import React from "react";
import OrderList from "../../components/dashboard/oderList/OderList";
import DashboardLayout from "../../layouts/DashboardLayout";
import MainDashboard from "../../components/dashboard/mainDashboard/MainDashboard";



function DashboardPage() {
	return (
		<>
			<DashboardLayout>
				<MainDashboard/>
			</DashboardLayout>
		</>
	)
}
export default DashboardPage