import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const productsSlide = createSlice({
	name: 'productList',
	initialState: {
		status: 'idle',
		products: []
	},
	reducers:{
		fetchProducts: (state, action) => {
			state = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductThunkAction.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchProductThunkAction.fulfilled, (state,action) => {
				state.status = 'idle'
				state.products = action.payload
		})
	}
})
export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction',async () => {
	let productListRes = await fetch('https://jsonserver-api-resfull-api.vercel.app/productList')
	let data = await productListRes.json()
	
	return data;
})
export default productsSlide;