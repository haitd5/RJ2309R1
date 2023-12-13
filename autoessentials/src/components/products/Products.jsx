import React, {useEffect, useState} from "react";
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import product from "./Product";
import rating from "../sidebar/Rating";
import {loadingSelector, remainProducts} from "../../redux-toolkit/selectors";
import productsSlide, {fetchProductThunkAction} from "../../slices/productsSlide";
import {Link} from "react-router-dom";

function Products() {
	const dispatch = useDispatch()
	const loading = useSelector(loadingSelector)
	useEffect(() => {
		dispatch(fetchProductThunkAction())
	}, [dispatch]);
	const remainProductList = useSelector(remainProducts)
	
	return (
		<section id="menu" className="menu py-4 mt-4">
			<div className="container">
				{
					loading === 'loading' ? (
						<div className={`text-center`}>
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-secondary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-success" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-danger" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<div className="row">
							{
								remainProductList?.map((product)=> (
										<Product key={product.id} product={product}/>
								))
							}
						</div>
					)
				}
				
			</div>
		</section>
	)
}
export default Products;