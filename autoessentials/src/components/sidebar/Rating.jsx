import React from "react";
import {useDispatch, useSelector} from "react-redux";
import filtersSlide from "../../slices/filtersSlide";
import {ratingSelector} from "../../redux-toolkit/selectors";

const ratings = [
	"All", "1", "2", "3", "4", '5'
]
function Rating() {
	const currenRating = useSelector(ratingSelector)
	const dispatch = useDispatch()
	return (
		<div className="py-2 d-flex flex-column justify-content-center">
			<h5>Ratings</h5>
			<div className="form-group">
				{
					ratings.map((rating, index) => (
						<div key={index} className="form-check py-1">
							<input className="form-check-input" type="radio" name="rating"
								   id={`rating_${index}`}
								   value={(6 - rating) || "All"}
								   defaultChecked={rating === 'All'}
								   onChange={(e) => dispatch(filtersSlide.actions.setSearchRatings(e.target.value))}
							/>
							<label
								htmlFor={`rating_${index}`}
								role="button"
								className={`form-check-label ${rating === currenRating ? 'text-decoration-underline fw-bolder' : ''}`}>
								{
									rating === "All" ? "All" : (
										new Array(Number(6 - rating)).fill(1)).map((value, index) => (
											<i className="fa-solid fa-star" key={index}></i>
										)
									)
								}
							</label>
						</div>
					))
				}
			</div>
		</div>
	)
}
export default Rating;