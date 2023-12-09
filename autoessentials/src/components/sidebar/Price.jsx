import React from "react";
import {useDispatch, useSelector} from "react-redux";
import filtersSlide from "../../slices/filtersSlide";
import {priceSelector} from "../../redux-toolkit/selectors";

const prices = [
	{
		value: '0,0',
		name: "All"
	},
	{
		value: '0,50',
		name: "$0-$50"
	},
	{
		value: '50,100',
		name: "$50-$100"
	},
	{
		value: '100,150',
		name: "$100-$150"
	},
	{
		value: '150,150',
		name: "Over $150"
	},
]
function Price() {
	const dispatch = useDispatch()
	const currenPrice = useSelector(priceSelector)
	return (
		<div className="py-2 d-flex flex-column justify-content-center">
			<h5>Price</h5>
			<div className="form-group">
				{
					prices.map((price,index) => (
						<div key={price.value} className="form-check py-1">
							<input className="form-check-input" type="radio" name="price"
								   id={`price_${index}`}
								   value={price.value}
								   defaultChecked={price.name === 'All'}
								   onChange={(e) => dispatch(filtersSlide.actions.setSearchPrice(e.target.value))}
							/>
							<label
								role="button"
								className={`form-check-label ${price.value === currenPrice ? 'text-decoration-underline fw-bolder' : ''}`}
								htmlFor={`price_${index}`}
							>
								{price.name}
							</label>
						</div>
					))
				}
			</div>
		</div>
	)
}
export default Price;