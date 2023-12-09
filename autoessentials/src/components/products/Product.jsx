import React from "react";
import {useDispatch} from "react-redux";
import cartSlide from "../../slices/cartSlide";
import {toast} from "react-toastify";

function Product({product}) {
	const dispatch = useDispatch()
	const {img, title, star, reviews, prevPrice, newPrice, shop} = product
	const handleAddToCart = (product) => {
		dispatch(cartSlide.actions.addToCart(product))
		toast.success(`${product.title} add to cart`, {autoClose : 1000, position: "bottom-right"})
	}
	return (
		<>
			<div className="col-md-6 col-xl-3 p-2">
					<div className="card h-100 overflow-hidden p-3 border-1">
						<div className="text-center">
							<img src={img} className="img-fluid" alt={''}/>
						
						</div>
						<div className="card-body">
							<p className="m-0 fw-bolder">{title}</p>
							<div className="fs-10">
								Shop: {shop}
							</div>
							<div className="d-flex align-items-center mb-2">
								<div className="me-1">
									{
										(new Array(star).fill(1)).map((value,index) => (
											<i key={index} className="fa-solid fa-star"></i>
										))
									}
								</div>
								<div className="fs-10">
									({reviews} reviewer)
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-evenly w-75">
								<div>
									{prevPrice > 0 && <del className="line-through me-2">${prevPrice}</del>}
									<span>${newPrice}</span>
								</div>
								<i className="fa-solid fa-cart-plus"
								   onClick={() => handleAddToCart(product)}
								   role={`button`}
								></i>
							</div>
						</div>
					</div>
			
			</div>
		</>
	)
}
export default Product;