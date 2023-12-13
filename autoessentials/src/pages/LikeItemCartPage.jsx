import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Delivery from "../components/delivery/Delivery";
import BannerLikeItem from "../components/banner/BannerLikeItem";
import {useDispatch, useSelector} from "react-redux";
import {likeItemSelector} from "../redux-toolkit/selectors";
import Product from "../components/products/Product";

function LikeItemCartPage() {
	const likeItem = useSelector(likeItemSelector)
	const {cartDetails} = likeItem
	const dispatch = useDispatch()
	return (
		<>
			<Header/>
			<BannerLikeItem/>
			<div className={`container`}>
				<h1 className={`fs-3`}>My List</h1>
				<div className={`row`}>
					{
						cartDetails?.map((product)=> (
							<Product key={product.id} product={product}/>
						))
					}
				</div>
			</div>
			<Delivery/>
			<Footer/>
		</>
	)
}
export default LikeItemCartPage