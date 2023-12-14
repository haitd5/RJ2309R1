import React from "react";
import SidebarDashboard from "../components/dashboard/sidebar/SidebarDashboard";
import NavbarDashboard from "../components/dashboard/nabar/NavbarDashboard";



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