import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const productsSlide = createSlice({
	name: 'productList',
	initialState: {
		status: 'idle',
		products: [],
		product: {}
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
			.addCase(fetchProductByIdThunkAction.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchProductByIdThunkAction.fulfilled, (state, action) => {
				state.status = 'idle'
				state.product = action.payload
			})
			.addCase(addNewProductThunkAction.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(addNewProductThunkAction.fulfilled, (state, action) => {
				state.products.unshift(action.payload)
			})
	}
})
export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction',async () => {
	let productListRes = await fetch('https://jsonserver-api-resfull-api.vercel.app/productList')
	let data = await productListRes.json()
	return data;
})
export const fetchProductByIdThunkAction = createAsyncThunk(
	'productList/fetchProductByIdThunkAction',
	async (productId) => {
		let productRes = await fetch(`https://jsonserver-api-resfull-api.vercel.app/productList/${productId}`)
		let product = await productRes.json()
		product = product.soft(function (item_1, item_2) {
			return Number(item_2.id) - Number(item_1.id)
		})
		return product
	}
)
export const addNewProductThunkAction = createAsyncThunk(
	'productList/addNewProductThunkAction',
	async (newProduct) => {
		let newProductRes = await fetch('https://jsonserver-api-resfull-api.vercel.app/productList', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(newProduct)
		})
		let data = await newProductRes.json()
		return data
	}
)

export default productsSlide;