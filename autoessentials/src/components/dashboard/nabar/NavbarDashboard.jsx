import React from "react";
import {Link} from "react-router-dom";


function NavbarDashboard() {
	return (
		<>
			<div className="p-0 pb-3 mb-2" style={{margin: "17px 0px"}}>
				<nav className="navbar navbar-expand-lg navbar-light shadow-sm text-dark">
					<div className="container">
						<Link to={`/dashboard`} className="navbar-brand d-flex justify-content-between align-items-center order-lg-0 mx-5">
							<p className="text-uppercase ms-2 fw-bold p-0 m-0">Auto<span className="text-color">Essentials</span>
							</p>
						</Link>
						
						<div className="order-lg-2 me-5">
							<Link to={`/home`}>
								<img src={'https://i.pinimg.com/564x/e8/82/72/e8827292777dca5378d3c75899029883.jpg'} className={`img-fluid avatar`} alt="" role={'button'}/>
							</Link>
						</div>
						<div className="collapse navbar-collapse order-lg-1 mx-3" id="navMenu">
							<form className="d-flex">
								<input className="form-control me-2" type="search" placeholder="Search"/>
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						</div>
					</div>
				</nav>
			
			</div>
		</>
	)
}
export default NavbarDashboard;