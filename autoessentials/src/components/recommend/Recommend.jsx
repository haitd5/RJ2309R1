import React from "react";

function Recommend() {
	return (
		<>
			<section id="toppicks" className="pt-5 pb-3">
				<div className="container text-center">
					<h3>Top Picks For You</h3>
					<p className="text-min pb-3">Find a bright ideal to suit your taste with our great selection of
						products.</p>
					<div className="row">
						<div className="col-md-6 col-xl-3 p-2">
							<div className="card h-100 overflow-hidden p-3 border-0">
								<div className="text-center">
									<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485631/Trenton_yuqwwd.png`}
										 className="img-fluid" alt="" role={`button`}/>
								</div>
								
								<div className="card-body text-center text-md-start">
									<p className="m-0">Brake system</p>
									<p className="m-0">Part Number: 8-97100-344-2</p>
									<p className="m-0 pb-1">Shope: Al Fareed </p>
									<h5 className="fw-bold">Rs. 25,000.00</h5>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-xl-3 p-2">
							<div className="card h-100 overflow-hidden p-3 border-0">
								<div className="text-center">
									<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485626/Granite_vfwgb6.png`} className="img-fluid" alt=""/>
								
								</div>
								
								<div className="card-body text-center text-md-start">
									<p className="m-0">Branded Tires</p>
									<p className="m-0">Part Number: 8-97100-344-2</p>
									<p className="m-0 pb-1">Shope: Al Fareed </p>
									<h5 className="fw-bold">Rs. 25,000.00</h5>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-xl-3 p-2">
							<div className="card h-100 overflow-hidden p-3 border-0">
								<div className="text-center">
									<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485627/Outdoor_nzjqsb.png`} className="img-fluid" alt=""/>
								
								</div>
								
								<div className="card-body text-center text-md-start">
									<p className="m-0">Air Filter system</p>
									<p className="m-0">Part Number: 8-97100-344-2</p>
									<p className="m-0 pb-1">Shope: Al Fareed </p>
									<h5 className="fw-bold">Rs. 25,000.00</h5>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-xl-3 p-2">
							<div className="card h-100 overflow-hidden p-3 border-0">
								<div className="text-center">
									<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485628/Plain_wey0uo.png`} className="img-fluid" alt=""/>
								
								</div>
								
								<div className="card-body text-center text-md-start">
									<p className="m-0">Car headlights</p>
									<p className="m-0">Part Number: 8-97100-344-2</p>
									<p className="m-0 pb-1">Shope: Al Fareed </p>
									<h5 className="fw-bold">Rs. 25,000.00</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center py-3">
					<a href="" className="pb-2 btn btn-dark">View More »</a>
				</div>
			</section>
		</>
	)
}
export default Recommend;