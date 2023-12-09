import React from "react";
import BannerCart from "../components/banner/BannerCart";
import Header from "../components/header/Header";
import Delivery from "../components/delivery/Delivery";
import Footer from "../components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector} from "../redux-toolkit/selectors";
import cartSlide from "../slices/cartSlide";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

function CartPage() {
	const cart = useSelector(cartSelector)
	const {cartInfo, cartDetails} = cart
	const dispatch = useDispatch()
	const handleIncrementQuantity = (cartItem) => {
		dispatch(cartSlide.actions.incrementQuantity(cartItem))
		toast.success(`${cartItem.title} has increment quantity`, {autoClose: 500, position: "bottom-right"})
	}
	const handleDecrementQuantity = (cartItem) => {
		dispatch(cartSlide.actions.decrementQuantity(cartItem))
		toast.success(`${cartItem.title} has decrement quantity`, {autoClose: 500, position: "bottom-right"})
	}
	const handleRemoveItem = (cartItem) => {
		Swal.fire({
			title: "Confirm remove cart item",
			text: "Are you sure to remove this cart item",
			confirmButtonText: "Confirm",
			showCancelButton: true
		}).then((result) => {
			if (result.isConfirmed){
				dispatch(cartSlide.actions.removeCartItem(cartItem))
				toast.error(`${cartItem.title} has remove`, {autoClose: 500, position: "bottom-right"})
			}
		})
		
		
	}
	return (
		<>
			<Header/>
			<BannerCart/>
			<section id="cart" className="cart py-4 mt-4">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-lg-8 g-3">
							<div className="row py-3 cart-color">
								<div className="col-2"></div>
								<div className="col-3 justify-content-center my-auto text-center">
									<p className="m-0">Product</p>
								</div>
								<div className="col-2 justify-content-center my-auto text-center">
									<p className="m-0">Price</p>
								</div>
								<div className="col-2 justify-content-center my-auto text-center">
									<p className="m-0">Quantity</p>
								</div>
								<div className="col-2 justify-content-center my-auto text-center">
									<p className="m-0">Subtotal</p>
								</div>
								<div className="col-1"></div>
							</div>
							{
								cartDetails?.map((cartItem) => (
									<div className="row border-bottom" key={cartItem.id}>
										<div className="col-2 justify-content-center my-auto text-center">
											<img src={cartItem.img} alt="" className="img-fluid"/>
										</div>
										<div className="col-3 justify-content-center my-auto text-center">
											<p className="m-0">{cartItem.title}</p>
										</div>
										<div className="col-2 justify-content-center my-auto text-center">
											<p className="m-0">{cartItem.newPrice}</p>
										</div>
										<div className="col-2 justify-content-center my-auto text-center">
											<div className="d-flex">
												<div className="input-group mb-3">
													{
														cartItem.quantity > 1 ? (
															<span className="input-group-text"
																  onClick={() => handleDecrementQuantity(cartItem)}
																  role={`button`}
															>-</span>
														) : (
														<span className="input-group-text">-</span>
														)
													}
													
													<input type="text" className="form-control text-center" value={cartItem.quantity}/>
													<span className="input-group-text"
														  onClick={() => handleIncrementQuantity(cartItem)}
														  role={`button`}
													>+</span>
												</div>
											</div>
										</div>
										<div className="col-2 justify-content-center my-auto text-center">
											<p className="m-0">{cartItem.amount}</p>
										</div>
										<div className="col-1 justify-content-center my-auto text-center">
												<i className="fas fa-trash-alt"
												   onClick={() => handleRemoveItem(cartItem)}
												   role={`button`}></i>
										</div>
									</div>
								))
							}
							<div className={`row`}>
								<Link to={`/shop`} className={`text-decoration-none`}>
									<i className="fa-solid fa-left-long me-1"></i>
									Continue shopping
								</Link>
							</div>
						</div>
						<div className="col-sm-12 col-lg-4 g-3">
							<div className="row ps-4 pb-5 border ms-3 cart-color">
								<h4 className="text-center py-3">Have a Coupon ?</h4>
								<div className="input-group pb-3">
									<input type="text" className="form-control" placeholder="Input your email"/>
								</div>
								<div className="text-center">
									<button className="btn w-25 btn-success">Apply</button>
								</div>
							</div>
							<div className="row ps-4 pt-5 border ms-3 mt-4 cart-color">
								<h4 className="pb-5 text-center">Cart Total</h4>
								<div className="row">
									<div className="col-4 my-auto">
										<p className="m-0 fw-bold">Subtotal: </p>
									</div>
									<div className="col-7 my-auto">
										<p className="m-0">
											{cartInfo.subTotal}
										</p>
									</div>
								</div>
								<div className="row py-4">
									<div className="col-4 my-auto">
										<p className="m-0 fw-bold">Shipping: </p>
									</div>
									<div className="col-7 my-auto">
										<p className="m-0">{`${cartInfo.shipping ? '$' + cartInfo.shipping : 'Free shipping'}`}</p>
									</div>
								</div>
								<div className="row pb-5">
									<div className="col-4 my-auto">
										<p className="m-0 fw-bold">Total: </p>
									</div>
									<div className="col-7 my-auto">
										<p className="m-0">{cartInfo.total}</p>
									</div>
								</div>
								<div className="pb-3 text-center">
									<a href="checkout.html" className="text-decoration-none text-white">
										<button className="btn btn-secondary">Check Out</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Delivery/>
			<Footer/>
		</>
	)
}
export default CartPage