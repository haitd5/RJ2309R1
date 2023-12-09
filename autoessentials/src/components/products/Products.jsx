import React, {useEffect} from "react";
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import product from "./Product";
import rating from "../sidebar/Rating";
import {remainProducts} from "../../redux-toolkit/selectors";
import productsSlide, {fetchProductThunkAction} from "../../slices/productsSlide";

function Products() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchProductThunkAction())
	}, [dispatch]);
	const remainProductList = useSelector(remainProducts)
	// const productList = useSelector((state) => state.productList)
	// const {searchText, category, ratings, price} = useSelector((state) => state.filters)
	// const queryProducts = () =>{
	// 	let filtersProduct = [...productList]
	//
	// 	if(searchText){
	// 		filtersProduct = filtersProduct.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
	// 	}
	// 	if(category !=="All"){
	// 		filtersProduct = filtersProduct.filter((p) => p.shop.toLowerCase() === category.toLowerCase())
	// 	}
	// 	if(ratings !== "All") {
	// 		filtersProduct = filtersProduct.filter((p) => p.star >= Number(ratings))
	// 	}
	// 	if(price !== "All"){
	// 		const [min,max] = price.split(",")
	// 		if(min !== max){
	// 			filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
	// 		}else {
	// 			filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min))
	// 		}
	// 	}
	// 	return filtersProduct
	// }
	// const remainProductList = queryProducts()
	return (
		<section id="menu" className="menu py-4 mt-4">
			<div className="container">
				<div className="row">
					{
						remainProductList?.map((product)=> (
							<Product key={product.id} product={product}/>
						))
					}
				</div>
			</div>
		</section>
	)
}
export default Products;