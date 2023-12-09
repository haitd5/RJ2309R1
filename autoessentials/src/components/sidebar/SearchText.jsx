import React from "react";
import {useDispatch, useSelector} from "react-redux";
import filtersSlide from "../../slices/filtersSlide";
import {searchTextSelector} from "../../redux-toolkit/selectors";

function SearchText() {
	const searchText = useSelector(searchTextSelector)
	const dispatch = useDispatch()
	return (
		
			<div className="w-100">
				<form className="w-100 d-flex align-items-center">
					<input
						value={searchText}
						type="search"
						placeholder="Enter your search"
						className="form-control form-control-sm"
						style={{ paddingRight: '25px' }}
						onInput={(e) => dispatch(filtersSlide.actions.setSearchText(e.target.value))}
					/>
					<i className="fa-solid fa-magnifying-glass" style={{ marginLeft: '-25px', color: 'rgba(0,0,0,.2)' }}></i>
				</form>
			</div>
	)
}
export default SearchText;