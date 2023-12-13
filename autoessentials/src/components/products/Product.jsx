import React from "react";
import {useDispatch, useSelector} from "react-redux";
import cartSlide from "../../slices/cartSlide";
import {toast} from "react-toastify";
import likeItemSlide from "../../slices/likeItemSlide";
import {likeItemSelector} from "../../redux-toolkit/selectors";
import {Link, useNavigate} from "react-router-dom";


function Product({product}) {
	const dispatch = useDispatch()
	const {img, title, star, reviews, prevPrice, newPrice, category, id} = product
	const likeItem = useSelector(likeItemSelector)
	const {cartDetails} = likeItem
	const handleAddToCart = (product) => {
		dispatch(cartSlide.actions.addToCart(product))
		toast.success(`${product.title} add to cart`, {autoClose : 1000, position: "bottom-right"})
	}
	const handleAddLikeToCart = (product) => {
		dispatch(likeItemSlide.actions.addLikeItemToCart(product))
		toast.success(`${product.title} add to like cart`, {autoClose : 1000, position: "bottom-right"})
	}
	
	// const navigate = useNavigate()
	// navigate(`/product/detail/${id}`)
	
	return (
		<>
			<div className="p-2 text-dark col-md-6 col-xl-3">
				<div className="card h-100 overflow-hidden p-3 border-1">
					<Link to={`/product/detail/${id}`}>
						<div className="text-center">
							<img src={img} className="img-fluid" alt={''}/>
						</div>
					</Link>
					<span className="position-absolute top-0 start-0 py-2 px-3 m-2 overlay-right">
						<button type="button" className="btn btn-secondary mb-2 mt-0"
								onClick={() => handleAddToCart(product)}>
							<i className="fa fa-shopping-cart"></i>
						</button>
					</span>
					<span className="position-absolute top-0 end-0 py-2 px-3 m-2">
						<button type="button" className="btn"
								onClick={() => handleAddLikeToCart(product)}>
							{
								cartDetails.find((item) => item.id === product.id) ? (
									<i className="fa fa-heart" style={{color: "#d32f2f"}}></i>
								) : (
									<i className="fa fa-heart" style={{color: "gray"}}></i>
								)
							}
						</button>
					</span>
					<div className="card-body">
						<p className="m-0 fw-bolder">{title}</p>
						<div className="">
							Shop: {category}
						</div>
						<div className="d-flex align-items-center mb-2">
							<div className="me-1">
								{
									(new Array(star ? star : 5).fill(1)).map((value,index) => (
										<i key={index} className="fa-solid fa-star"
										   style = {{color: `${star ? "#F4CE14" : "gray"}`}}></i>
									))
								}
							</div>
							<div className="">
								({reviews} reviewer)
							</div>
						</div>
						<div className="d-flex align-items-center">
							<div>
								{Number(prevPrice) > 0 && <del className="line-through me-4">${prevPrice}</del>}
								<span>${newPrice}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Product;