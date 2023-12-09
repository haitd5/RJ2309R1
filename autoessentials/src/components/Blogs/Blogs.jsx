import React from "react";

function Blogs() {
	return (
		<>
			<section id="blogs" className="py-5">
				<div className="container">
					<div className="container text-center">
						<h3>Our Blogs</h3>
						<p className="text-min pb-3">Find a bright ideal to suit your taste with our great selection.</p>
						<div className="row py-3">
							<div className="col-lg-4 col-md-6 py-2">
								<img className="img-fluid" src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485624/blogs1_pihah4.png`} alt=""/>
									<div className="p-4">
										<p><a className="mb-4 text-decoration-none text-dark" href="">How to change
											engine oil at home?</a></p>
										<p><a href=""
											  className="text-decoration-none text-dark pb-2 border-bottom border-2 border-dark fs-5">Read
											More</a></p>
										<div>
											<small className="mx-3"><i className="far fa-clock me-2"></i>5 min</small>
											<small className="me-3"><i className="far fa-calendar-alt me-2"></i>01 Jan, 2023</small>
										</div>
									</div>
							</div>
							<div className="col-lg-4 col-md-6 py-2">
								<img className="img-fluid" src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485625/blogs2_hgksh4.png`} alt=""/>
									<div className="p-4">
										<p><a className="mb-4 text-decoration-none text-dark" href="">Guide to prolong
											the life of engine oil</a></p>
										<p><a href=""
											  className="text-decoration-none text-dark pb-2 border-bottom border-2 border-dark fs-5">Read
											More</a></p>
										<div>
											<small className="mx-3"><i className="far fa-clock me-2"></i>5 min</small>
											<small className="me-3"><i className="far fa-calendar-alt me-2"></i>01 Jan, 2023</small>
										</div>
									</div>
							</div>
							<div className="col-lg-4 col-md-6 py-2">
								<img className="img-fluid" src={`https://res.cloudinary.com/deiyf3lf7/image/upload/v1701485625/blogs3_kvbckh.png`} alt=""/>
									<div className="p-4">
										<p><a className="mb-4 text-decoration-none text-dark" href="">How to take care
											of engine oil?</a></p>
										<p><a href=""
											  className="text-decoration-none text-dark pb-2 border-bottom border-2 border-dark fs-5">Read
											More</a></p>
										<div>
											<small className="mx-3"><i className="far fa-clock me-2"></i>5 min</small>
											<small className="me-3"><i className="far fa-calendar-alt me-2"></i>01 Jan, 2023</small>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<p><a href=""
						  className="text-decoration-none text-white p-2 rounded-2 bg-dark">View All
						Post »</a>
					</p>
				</div>
			</section>
		</>
	)
}
export default Blogs;