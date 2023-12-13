import React from "react";
import SidebarDashboard from "../../components/dashboard/SidebarDashboard";
import NavbarDashboard from "../../components/dashboard/NavbarDashboard";

function DashboardPage() {
	return (
		<>
			<div className={`d-flex`}>
				<div className={`w-auto`}>
					<SidebarDashboard/>
				</div>
				<div className={`col`} style={{background: "#F3F3F3"}}>
					<NavbarDashboard/>
				</div>
			</div>
		</>
	)
}
export default DashboardPage