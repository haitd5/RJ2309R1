import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector, productSelector} from "../redux-toolkit/selectors";
import product from "../components/products/Product";
import {fetchProductByIdThunkAction} from "../slices/productsSlide";
import {Link, useParams} from "react-router-dom";
import cartSlide from "../slices/cartSlide";
import {toast} from "react-toastify";
import Delivery from "../components/delivery/Delivery";

function ItemDetailPage() {
	const {id} = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchProductByIdThunkAction(id))
	},[dispatch])
	
	const itemDetail = useSelector(productSelector)
	console.log(itemDetail)
	
	
	const [quantity, setQuantity] = useState(1)
	const handleIncrementQuantity = () => {
		setQuantity(quantity+1)
	}
	const handleDecrementQuantity = () =>{
		setQuantity(quantity-1)
	}
	const handeAddToCart = (itemDetail, quantity) => {
		dispatch(cartSlide.actions.addToCartWithQuantity({
			...itemDetail,
			quantity
		}))
		toast.success(`${product.title} add to like cart`, {autoClose : 1000, position: "bottom-right"})
	}
	return (
		<>
			<Header/>
			<>
				<div className="container p-0">
					<section id="product-title" className="product-title py-4 mt-4">
						<div className="d-flex">
							<div className="text-dark">
								<Link to={`/home`} className="text-dark">Home</Link>
								<span className="px-4"><i className="fas fa-angle-right"></i></span>
							</div>
							<div>
								<Link to={`/shop`} className="text-dark">Shop</Link>
								<span className="px-4"><i className="fas fa-angle-right"></i></span>
							</div>
							<div>
								<p className="ps-4 border-start border-3 border-black">{itemDetail.category}</p>
							</div>
						
						</div>
					</section>
					<section id="information" className="information">
						<div className="row pb-5">
							<div className="col-md-12 col-lg-6 pb-3">
								<div className="row bg-color" style={{height: "500px"}}>
									<div className="text-center bg-color rounded-2 m-auto">
										<img src={itemDetail.img} alt=""
											 className="img-fluid justify-content-center align-items-center m-auto"
											 style={{maxWidth: "300px"}}
										/>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-lg-6">
								<div className="ms-3">
									<h1>{itemDetail.title}</h1>
									<h3 className="text-muted">{itemDetail.newPrice}</h3>
									<p>Shope: {itemDetail.category}</p>
									<p className="text-muted">Description: {itemDetail.description}</p>
									<div className="input-group pt-3 w-25 d-flex">
										{
											quantity > 1 ? (
												<span className="input-group-text btn border" onClick={handleDecrementQuantity}>-</span>
											) : (
												<span className="input-group-text btn border disabled">-</span>
											)
										}
										<input type="text" className="form-control text-center" value={quantity}/>
										<span className="input-group-text btn border" onClick={handleIncrementQuantity}>+</span>
									</div>
									<div className="py-3 text-center">
										<button className="btn btn-dark" type={'button'}
												onClick={() => handeAddToCart(itemDetail,quantity)}>Add To Cart</button>
									</div>
									<hr/>
										<div className="row">
											<div className="col-3 text-min">SKU</div>
											<div className="col-9 text-min">: <span className="ps-5">SS001</span></div>
										</div>
										<div className="row">
											<div className="col-3 text-min">Category</div>
											<div className="col-9 text-min">: <span className="ps-5">{itemDetail.category}</span></div>
										
										</div>
										<div className="row">
											<div className="col-3 text-min">Tags</div>
											<div className="col-9 text-min">: <span className="ps-5">Tire, rims, Shop</span></div>
										
										</div>
										<div className="row">
											<div className="col-3 text-min">Share</div>
											<div className="col-9 text-min">:
												<span className="ps-5">
												<a href="" className="text-decoration-none text-min"><i
													className="fab fa-facebook-square fs-4"></i></a>
												<a href="" className="text-decoration-none text-min"><i
													className="fab fa-twitter-square fs-4 px-2"></i></a>
												<a href="" className="text-decoration-none text-min"><i
													className="fab fa-instagram-square fs-4"></i></a>
                                    		</span>
											</div>
										</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</>
			<Delivery/>
			<Footer/>
		</>
	)
}
export default ItemDetailPage