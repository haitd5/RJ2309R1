import {createSlice} from "@reduxjs/toolkit";

const likeItemSlide = createSlice({
	name: 'likeItem',
	initialState: {
		cartDetails:[]
	},
	reducers: {
		addLikeItemToCart: (state, action) => {
			// let cartItem = state.cartDetails.find((item) => item.id === action.payload.id)
			// if(cartItem?.id !== -1){
			// 	state.cartDetails.id = state.cartDetails.id.filter((item, index) => index !== cartItem.id)
			// } else {
			// 	state.cartDetails.push({
			// 		...action.payload
			// 	})
			// }
			let { id } = action.payload;
			let existingItemIndex = state.cartDetails.findIndex(item => item.id === id);
			
			if (existingItemIndex !== -1) {
				state.cartDetails = state.cartDetails.filter((item, index) => index !== existingItemIndex);
			} else {
				state.cartDetails.push({
					...action.payload,
				});
			}
		}
	},
	
})

export default likeItemSlide