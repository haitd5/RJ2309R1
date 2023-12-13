import {configureStore} from "@reduxjs/toolkit";
import productsSlide from "../slices/productsSlide";
import filtersSlide from "../slices/filtersSlide";
import cartSlide from "../slices/cartSlide";
import likeItemSlide from "../slices/likeItemSlide";
import orderSlide from "../slices/orderSlide";

const store = configureStore({
	reducer: {
		productList: productsSlide.reducer,
		filters: filtersSlide.reducer,
		cart: cartSlide.reducer,
		likeItem: likeItemSlide.reducer,
		orders: orderSlide.reducer
	}
})
export default store