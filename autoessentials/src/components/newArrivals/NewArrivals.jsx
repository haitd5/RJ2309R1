import React from "react";

function NewArrivals() {
	return (
		<>
			<section id="new-arrivals" className={`bg-color`}>
				<div className="row">
					<div className="col-4 order-lg-1 text-center my-auto">
						<div className="text-center">
							<p className="m-0">New Arrivals</p>
							<h1 className="fw-bold py-2">Shell Engine Oil</h1>
							<a href="" className="p-3 btn btn-dark">Shop Now</a>
						</div>
					
					</div>
					<div className="col-8 order-lg-0">
						<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701487912/Asgaard_o2hifb.png`} alt="" className="img-fluid mx-3"/>
					</div>
				</div>
			</section>
		</>
	)
}
export default NewArrivals;