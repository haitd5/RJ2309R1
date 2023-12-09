import {createSlice} from "@reduxjs/toolkit";

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
		
		],
		customerInfo: {
			fullName: '',
			address: '',
			email: '',
			mobile: ''
		}
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
		}
	}
})
export default cartSlide;