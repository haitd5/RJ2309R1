import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const cartSlide = createSlice({
	name: 'cart',
	initialState: {
		cartInfo: {
			subTotal: 0,
			shipping: 0,
			total: 0,
			status: 'pending'
		},
		cartDetails: [
		
		]
	},
	reducers: {
		addToCart: (state, action) =>{
			let cartItem = state.cartDetails.find((cartItem) => cartItem.id === action.payload.id)
			if(cartItem?.id){
				cartItem.quantity = Number(cartItem.quantity) + 1
				cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice
			}
			else {
				state.cartDetails.push({
					...action.payload,
					quantity: 1,
					amount: action?.payload?.newPrice
				})
			}
			let newSubTotal = 0
			for (const item of state.cartDetails) {
				newSubTotal += Number(item.amount)
			}
			state.cartInfo.subTotal = newSubTotal
			state.cartInfo.total = newSubTotal + state.cartInfo.shipping
		},
		incrementQuantity: (state, action) => {
			let cartItem = state.cartDetails.find((cartItem) => cartItem.id === action.payload.id)
			cartItem.quantity = Number(cartItem.quantity) + 1
			cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice
			
			let newSubTotal = 0
			for (const item of state.cartDetails) {
				newSubTotal += Number(item.amount)
			}
			state.cartInfo.subTotal = newSubTotal
			state.cartInfo.total = newSubTotal + state.cartInfo.shipping
		},
		decrementQuantity: (state, action) => {
			let cartItem = state.cartDetails.find((cartItem) => cartItem.id === action.payload.id)
			cartItem.quantity = Number(cartItem.quantity) - 1
			cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice
			
			let newSubTotal = 0
			for (const item of state.cartDetails) {
				newSubTotal += Number(item.amount)
			}
			state.cartInfo.subTotal = newSubTotal
			state.cartInfo.total = newSubTotal + state.cartInfo.shipping
		},
		removeCartItem: (state, action) => {
			state.cartDetails = state.cartDetails.filter((cartItem) => cartItem.id !== action.payload.id)
			let newSubTotal = 0
			for (const item of state.cartDetails) {
				newSubTotal += Number(item.amount)
			}
			state.cartInfo.subTotal = newSubTotal
			state.cartInfo.total = newSubTotal + state.cartInfo.shipping
		},
		addToCartWithQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			
			let cartItem = state.cartDetails.find((cartItem) => cartItem.id === id);
			
			if (cartItem?.id) {
				cartItem.quantity = Number(cartItem.quantity) + quantity;
				cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice;
			} else {
				state.cartDetails.push({
					...action.payload,
					quantity: quantity,
					amount: action?.payload?.newPrice * quantity,
				});
			}
			
			let newSubTotal = 0;
			for (const item of state.cartDetails) {
				newSubTotal += Number(item.amount);
			}
			
			state.cartInfo.subTotal = newSubTotal;
			state.cartInfo.total = newSubTotal + state.cartInfo.shipping;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(checkoutThunkAction.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(checkoutThunkAction.fulfilled, (state,action) => {
				state.cartDetails = []
				state.cartInfo = {
					subTotal: 0,
					shipping: 0,
					total: 0,
					status: 'pending'
				}
			})
	}
})
export const checkoutThunkAction = createAsyncThunk('cart/checkoutThunkAction', async (data) => {
	let orderRes = await fetch('https://jsonserver-api-resfull-api.vercel.app/orderList', {
		method: "POST",
		headers: {
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(data)
	})
	let result = await orderRes.json()
	return result;
})

export default cartSlide;