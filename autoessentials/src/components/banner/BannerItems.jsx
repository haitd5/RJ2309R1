import React from "react";

function BannerItems(){
	return (
		<>
			<section id="product" className="product p-5">
				<div className="row py-3">
					
					<div className="col-md-12 col-lg-6 justify-content-center my-auto">
						<div className="text-center pb-4">
							<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485627/Lubricants_gywjaz.png`} alt="" className="img-fluid"/>
								<h3 className="py-2">Lubricants</h3>
								<a href="" className="pb-2 btn btn-dark">View More »</a>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 text-center">
						<div className="text-center">
							<img src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485630/Spare-Parts_yeexyk.png`} alt="" className="img-fluid"/>
								<h3 className="py-2">Spare Parts</h3>
								<a href="" className="pb-2 btn btn-dark">View More »</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default BannerItems;