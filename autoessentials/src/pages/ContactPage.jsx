import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BannerContact from "../components/banner/BannerContact";

function ContactPage() {
	return (
		<>
			<Header/>
			<BannerContact/>
			<section id="contact-us" className="contact-us pb-4">
				<div className="container">
					<div className="py-3">
						<iframe className="w-100" style={{height: "450px"}}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
								aria-hidden="false"></iframe>
					</div>
					
					
					<div className="row g-5 justify-content-center">
						<div className="col-lg-5 col-md-12">
							<div className="text-black d-flex flex-column justify-content-center h-100 p-5">
								<h5 className="text-dark fw-bold">Call Us : </h5>
								<p className="mb-4">
									<i className="fa fa-phone-alt me-1"></i>
									+012 345 67890
								</p>
								<h5 className="text-dark fw-bold">Email Us :</h5>
								<p className="mb-4">
									<a href="#" className="text-decoration-none text-black">
										<i className="fa fa-envelope me-1"></i>
										info@example.com
									</a>
								
								</p>
								<h5 className="text-dark fw-bold">Office Address :</h5>
								<p className="mb-4">
									<a href="#" className="text-decoration-none text-black">
										<i className="fa fa-map-marker-alt me-1"></i>
										123 Street, New York, USA
									</a>
								</p>
								<h5 className="">Follow Us</h5>
								<div className="d-flex pt-2">
									<a className="fs-3 text-dark" href=""><i className="fab fa-twitter"></i></a>
									<a className="fs-3 px-3 text-primary" href=""><i className="fab fa-facebook-f"></i></a>
									<a className="fs-3 text-dark" href=""><i className="fab fa-youtube"></i></a>
									<a className="fs-3 ps-3 text-dark" href=""><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
						<div className="col-lg-7 col-md-12">
							<h4 className="mb-4 text-dark">Leave us a message</h4>
							<form>
								<div className="row g-3">
									<div className="col-md-6">
										<div className="form-floating">
											<input type="text" className="form-control" id="name" placeholder="Your Name"/>
												<label for="name">Your Name</label>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-floating">
											<input type="email" className="form-control" id="email"
												   placeholder="Your Email"/>
												<label for="email">Your Email</label>
										</div>
									</div>
									<div className="col-12">
										<div className="form-floating">
											<input type="text" className="form-control" id="subject" placeholder="Subject"/>
												<label for="subject">Subject</label>
										</div>
									</div>
									<div className="col-12">
										<div className="form-floating">
											<div className="mb-3">
                                                <textarea className="form-control" id="message" rows="7"
														  placeholder="Message"></textarea>
											</div>
										</div>
									</div>
									<div className="col-12">
										<button className="btn btn-primary py-3 px-5 text-white" type="submit">Send
											Message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</>
	)
}
export default ContactPage