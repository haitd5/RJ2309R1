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
			.addCase(fetchProductListPaginateThunkAction.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchProductListPaginateThunkAction.fulfilled, (state, action) => {
				state.status = 'idle'
				state.data = action.payload
			})
			
	}
})
export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction',async () => {
	let productListRes = await fetch('https://jsonserver-api-nmel.vercel.app/productList')
	let data = await productListRes.json()
	data = data.sort(function (item_1, item_2) {
		return Number(item_2.id) - Number(item_1.id)
	})
	return data;
})
export const fetchProductByIdThunkAction = createAsyncThunk(
	'productList/fetchProductByIdThunkAction',
	async (productId) => {
		let productRes = await fetch(`https://jsonserver-api-nmel.vercel.app/productList/${productId}`)
		let product = await productRes.json()
		return product
	}
)
export const fetchProductListPaginateThunkAction = createAsyncThunk(
	'productList/fetchProductListPaginateThunkAction',
	async (paginate) => {
		const {_page, _limit, _sort, _order} = paginate
		let productListRes = await fetch('https://jsonserver-api-nmel.vercel.app/productList')
		let productList = await productListRes.json()
		let pagination = {
			totalPage: Math.ceil(Number(productList.length) / Number(_limit)),
			currentPage: _page,
			pageSize: _limit
		}
		let productPaginationRes = await fetch(`https://jsonserver-api-nmel.vercel.app/productList?_page=${_page}&_limit=${_limit}&_sort=${_sort}&_order=${_order}`)
		let products = await productPaginationRes.json()
		let data = {
			products: products,
			pagination: pagination
		}
		
		return data
	}
)


export default productsSlide;