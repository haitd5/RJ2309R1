import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const orderSlide = createSlice({
	name: 'orders',
	initialState: {
		status: 'idle',
		orderList: []
	},
	reducers: {
	
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderListThunkAction.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchOrderListThunkAction.fulfilled,(state, action) => {
				state.status = 'idle';
				state.orderList = action.payload
			})
	}
})
export const fetchOrderListThunkAction = createAsyncThunk(
	'cart/fetchOrderListThunkAction',
	async () => {
	let orderListRes = await fetch('https://jsonserver-api-nmel.vercel.app/orderList')
	let data = await orderListRes.json()
	return data
})
export default orderSlide