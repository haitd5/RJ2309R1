import React from "react";
import {Link} from "react-router-dom";

function Banner(){
	return (
		<>
			<section id="banner" className="banner pt-3 bg-color">
				<div className="row py-3">
					<div className="col-md-12 col-lg-6 order-lg-0 justify-content-center my-auto">
						<div className="text-center">
							<h1 className="display-4 fw-bold"><span className="text-white">Auto </span>Spare Parts</h1>
							<h4 className="py-2">All Major Brands Available</h4>
							<Link to={`/shop`} className="p-3 btn btn-dark">Shop Now</Link>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 order-lg-1 text-center">
						<img src={'https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485624/banner_mhobop.png'} alt="" className="img-fluid"/>
					</div>
				</div>
			</section>
		</>
	)
}
export default Banner;