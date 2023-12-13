import React from "react";
import SidebarDashboard from "../components/dashboard/SidebarDashboard";
import NavbarDashboard from "../components/dashboard/NavbarDashboard";


function DashboardLayout({children}) {
	return (
		<>
			<div className={`d-flex`}>
				<div className={`w-auto`}>
					<SidebarDashboard/>
				</div>
				<div className={`col`} style={{background: "#F3F3F3"}}>
					<NavbarDashboard/>
					{children}
				</div>
			</div>
		</>
	)
}
export default DashboardLayout;