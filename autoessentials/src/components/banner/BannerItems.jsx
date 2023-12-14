import React from "react";
import {Link} from "react-router-dom";

function BannerItems(){
	return (
		<>
			<section id="product" className="product p-5">
				<div className="row py-3">
					
					<div className="col-md-12 col-lg-6 justify-content-center my-auto">
						<div className="text-center pb-4" role={'button'}>
							<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485627/Lubricants_gywjaz.png`} alt="" className="img-fluid"/>
								<h3 className="py-2">Lubricants</h3>
								<Link to={'/shop'} className="pb-2 btn btn-dark">View More »</Link>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 text-center">
						<div className="text-center" role={'button'}>
							<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485630/Spare-Parts_yeexyk.png`} alt="" className="img-fluid"/>
								<h3 className="py-2">Spare Parts</h3>
								<Link to={'/shop'} className="pb-2 btn btn-dark">View More »</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default BannerItems;