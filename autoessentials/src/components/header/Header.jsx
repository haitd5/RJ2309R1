import React from "react";
import {useSelector} from "react-redux";
import {cartSelector, likeItemSelector} from "../../redux-toolkit/selectors";
import {Link} from "react-router-dom";

function Header() {
	const cart = useSelector(cartSelector)
	const likeItem = useSelector(likeItemSelector)
	return (
		<>
			<div className="p-0 pb-5">
				<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
					<div className="container">
						<Link to={`/home`} className="navbar-brand d-flex justify-content-between align-items-center order-lg-0">
							<p className="text-uppercase ms-2 fw-bold p-0 m-0">Auto<span className="text-color">Essentials</span>
							</p>
						</Link>
						<div className="order-lg-2 me-3">
							{
								cart.cartDetails.length ? (
									<Link to={`/cart`} className="btn position-relative">
										<i className="fa fa-shopping-cart"></i>
										<span className="bg-danger border border-light rounded-circle text-white"
											  style={{position: "absolute", top: "-10px",right: "-2px", padding: "0px" +
													  " 5px", fontSize: "12px"}}
										>
    										{cart.cartDetails.length}
										</span>
									</Link>
								) : (
									<Link to={`/cart`} className="btn">
										<i className="fa fa-shopping-cart"></i>
									</Link>
								)
							}
							
							{
								likeItem.cartDetails.length ? (
									<Link to={`/like`} className="btn position-relative">
										<i className="fa-solid fa-heart"></i>
										<span className="bg-danger border border-light rounded-circle text-white"
											  style={{position: "absolute", top: "-10px",right: "-2px", padding: "0px" +
													  " 5px", fontSize: "12px"}}
										>
    										{likeItem.cartDetails.length}
										</span>
									</Link>
								) : (
									<Link to={`/like`} className="btn">
										<i className="fa-solid fa-heart"></i>
									</Link>
								)
							}
							{/*<button type="button" className="btn">*/}
							{/*	<i className="fa-solid fa-heart"></i>*/}
							{/*</button>*/}
							
							<Link to={`/dashboard`} className="text-decoration-none">
								<button type="button" className="btn">
									<i className="fas fa-user"></i>
								</button>
							</Link>
						</div>
						<button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
								data-bs-target="#navMenu">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse order-lg-1" id="navMenu">
							<ul className="navbar-nav mx-auto text-center">
								<li className="nav-item px-2 py-2">
									<Link to={`/home`} className="nav-link text-uppercase link-custom text-dark" href="">home</Link>
								</li>
								<li className="nav-item px-2 py-2">
									<Link to={`/shop`} className="nav-link text-uppercase link-custom text-dark" href="">Shop</Link>
								</li>
								<li className="nav-item px-2 py-2">
									<a className="nav-link text-uppercase link-custom text-dark" href="">About</a>
								</li>
								<li className="nav-item px-2 py-2">
									<Link to={`/contact`} className="nav-link text-uppercase link-custom text-dark" href="">Contact</Link>
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