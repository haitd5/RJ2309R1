import React from "react";


function Footer() {
	return (
		<>
			<div>
				<footer className="pt-5 border-top border-1 shadow">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6 col-lg-3 text-center text-md-start pb-2">
								<img src="https://res.cloudinary.com/deiyf3lf7/image/upload/v1701479936/footerimage.png" alt="" className={`img-fluid w-75 bg-color border`}/>
							</div>
							<div className="col-12 col-md-6 col-lg-3 text-center text-md-start pb-2">
								<h5 className="fw-bold pb-2">Links</h5>
								<p><a href="#" className="text-decoration-none text-dark link-custom">Home</a></p>
								<p><a href="#" className="text-decoration-none text-dark link-custom">Shop</a></p>
								<p><a href="#" className="text-decoration-none text-dark link-custom">About</a></p>
								<p><a href="#" className="text-decoration-none text-dark link-custom">Contact</a></p>
							
							
							</div>
							<div className="col-12 col-md-6 col-lg-3 text-center text-md-start pb-2">
								<h5 className="fw-bold pb-2">Help</h5>
								<p><a href="#" className="text-decoration-none text-dark link-custom">Payment Options</a></p>
								<p><a href="#" className="text-decoration-none text-dark link-custom">Returns</a></p>
								<p><a href="#" className="text-decoration-none text-dark link-custom">Privacy Policies</a></p>
							
							</div>
							<div className="col-12 col-md-6 col-lg-3 text-center text-md-start pb-2">
								<h5 className="fw-bold pb-2">Newsletter</h5>
								<div className="input-group mb-3">
									<input type="text" className="form-control w-50" placeholder="email" aria-label="email"/>
									<span className="input-group-text btn btn-primary" id="email">
										<i className="fas fa-arrow-right"></i>
									</span>
								</div>
							</div>
						
						</div>
					
					</div>
				</footer>
			</div>
		</>
	)
}
export default Footer;