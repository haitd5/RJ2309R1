import {createSlice} from "@reduxjs/toolkit";

const filtersSlide = createSlice({
	name: 'filters',
	initialState:{
		searchText: '',
		category: 'All',
		ratings: 'All',
		price: '0,0'
	},
	reducers:{
		setSearchText: (state, action) => {
			// return {
			// 	...state,
			// 	searchText: action.payload
			// }
			state.searchText = action.payload
		},
		setSearchCategory: (state, action) =>{
			state.category = action.payload
		},
		setSearchRatings: (state, action) => {
			state.ratings = action.payload
		},
		setSearchPrice: (state, action) =>{
			state.price = action.payload
		}
	}
})
export default filtersSlide;