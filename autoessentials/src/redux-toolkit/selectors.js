import {createSelector} from "@reduxjs/toolkit";

export const productListSelector = (state) => state.productList.products
export const loadingSelector = (state) => state.productList.status
export const categorySelector = (state) => state.filters.category
export const priceSelector = (state) => state.filters.price
export const ratingSelector = (state) => state.filters.ratings
export const searchTextSelector = (state) => state.filters.searchText
export const cartSelector = (state) => state.cart
export const likeItemSelector = (state) => state.likeItem
export const productSelector = (state) => state.productList.product
export const orderListSelector = (state) => state.orders.orderList
export const orderLoadingSelector = (state) => state.orders.status

export const remainProducts = createSelector(
	productListSelector,
	categorySelector,
	priceSelector,
	ratingSelector,
	searchTextSelector,
	(productList,category,price,ratings,searchText) => {
		let filtersProduct = [...productList]
			if(searchText){
				filtersProduct = filtersProduct.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
			}
			if(category !=="All"){
				filtersProduct = filtersProduct.filter((p) => p.shop.toLowerCase() === category.toLowerCase())
			}
			if(ratings !== "All") {
				filtersProduct = filtersProduct.filter((p) => p.star >= Number(ratings))
			}
			if(price !== "All"){
				const [min,max] = price.split(",")
				if(min !== max){
					filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
				}else {
					filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min))
				}
			}
			return filtersProduct
	}
)