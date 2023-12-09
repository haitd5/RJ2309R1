import {configureStore} from "@reduxjs/toolkit";
import productsSlide from "../slices/productsSlide";
import filtersSlide from "../slices/filtersSlide";
import cartSlide from "../slices/cartSlide";

const store = configureStore({
	reducer: {
		productList: productsSlide.reducer,
		filters: filtersSlide.reducer,
		cart: cartSlide.reducer
	}
})
export default store