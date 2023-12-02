import React from "react";

function Header() {
	return (
		<>
			<div className="container-fluid p-0 pb-5 mb-2">
				<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
					<div className="container">
						<a className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
						   href="">
							<p className="text-uppercase ms-2 fw-bold p-0 m-0">Auto<span className="text-color">Essentials</span>
							</p>
						</a>
						<div className="order-lg-2">
							<a href="" className="text-decoration-none">
								<button type="button" className="btn">
									<i className="fa fa-shopping-cart"></i>
								</button>
							</a>
							<a href="#" className="text-decoration-none">
								<button type="button" className="btn">
									<i className="fa fa-search"></i>
								</button>
							</a>
							<a href="" className="text-decoration-none">
								<button type="button" className="btn">
									<i className="fas fa-user"></i>
								</button>
							</a>
						</div>
						<button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
								data-bs-target="#navMenu">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse order-lg-1" id="navMenu">
							<ul className="navbar-nav mx-auto text-center">
								<li className="nav-item px-2 py-2">
									<a className="nav-link text-uppercase link-custom text-dark" href="">home</a>
								</li>
								<li className="nav-item px-2 py-2">
									<a className="nav-link text-uppercase link-custom text-dark" href="">Shop</a>
								</li>
								<li className="nav-item px-2 py-2">
									<a className="nav-link text-uppercase link-custom text-dark" href="">About</a>
								</li>
								<li className="nav-item px-2 py-2">
									<a className="nav-link text-uppercase link-custom text-dark" href="">Contact</a>
								</li>
								<li className="nav-item px-2 py-2">
									<a className="nav-link text-uppercase link-custom text-dark" href="">Tools</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
export default Header