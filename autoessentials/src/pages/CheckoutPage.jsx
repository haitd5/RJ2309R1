import React, {useState} from "react";
import Header from "../components/header/Header";
import Delivery from "../components/delivery/Delivery";
import Footer from "../components/footer/Footer";
import BannerCheckout from "../components/banner/BannerCheckout";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector} from "../redux-toolkit/selectors";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {v4 as uuid} from "uuid";
import cartSlide, {checkoutThunkAction} from "../slices/cartSlide";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


const schema = yup
	.object({
		fullName: yup.string().required(),
		address: yup.string().required(),
		mobile: yup.number().required(),
		email: yup.string().required(),
	})

function CheckoutPage() {
	const dispatch = useDispatch()
	const cart = useSelector(cartSelector)
	const {cartInfo, cartDetails} = cart
	const navigate = useNavigate()
	const [selectedOption, setSelectedOption] = useState('COD')
	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value)
	}
	
	const {register,
		handleSubmit,
		reset,
		formState: {errors}
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	const handlePlaceOrder = (data) => {
		Swal.fire({
			title: "Confirm place order",
			text: "Are you checkout this cart item",
			confirmButtonText: "Confirm",
			showCancelButton: true
		}).then((result) => {
			if (result.isConfirmed){
				const order = {
					orderId: uuid(),
					orderInfo: {
						...cartInfo,
						orderDay: Math.floor(Date.now()/1000)
					},
					orderDetails: [...cartDetails],
					customerInfo: {
						...data
					}
				}
				dispatch(checkoutThunkAction(order))
				reset()
				navigate("/shop")
				toast.success(`checkout success`, {autoClose : 1000, position: "bottom-right"})
			}
		})
		
	}
	
	return (
		<>
			<Header/>
			<BannerCheckout/>
			<section id="login" className="login py-4 mt-4">
				<div className="container">
					<form onSubmit={handleSubmit(handlePlaceOrder)}>
						<div className="row">
							<h1>Billing details</h1>
							<div className="col-md-12 col-xl-6 p-2">
									<div className="row g-3">
										<div className="col-md-12">
											<label className={`form-label`}>Full Name</label>
											<input type={`text`}
												   className={`form-control ${errors?.fullName?.message ? 'is-invalid' : ''}`}
												   placeholder={`Ful name`}
												   {...register('fullName')}/>
											<span className='invalid-feedback'>{errors?.fullName?.message}</span>
										</div>
										<div className="col-12">
											<label className={`form-label`}>Address</label>
											<input type={`text`}
												   className={`form-control ${errors?.address?.message ? 'is-invalid' : ''}`}
												   placeholder={`Address`}
												   {...register('address')}/>
											<span className='invalid-feedback'>{errors?.address?.message}</span>
										</div>
										<div className="col-12">
											<label className={`form-label`}>Phone</label>
											<input type={`number`}
												   className={`form-control ${errors?.phone?.message ? 'is-invalid' : ''}`}
												   placeholder={`Mobile`}
												   {...register('mobile')}/>
										</div>
										<div className="col-12">
											<label className={`form-label`}>Address email</label>
											<input type={`email`}
												   className={`form-control ${errors?.email?.message ? 'is-invalid' : ''}`}
												   placeholder={`Email`}
												   {...register('email')}/>
											<span className='invalid-feedback'>{errors?.email?.message}</span>
										</div>
									</div>
							</div>
							<div className="col-md-12 col-xl-6 px-5 py-2">
									<div style={{background: '#FAF4F4'}} className={`px-3 pt-3 rounded-3`}>
										<div className="d-flex justify-content-between">
											<h4>Product</h4>
											<h4>Subtotal</h4>
										</div>
										<div className={`ps-3`}>
											{
												cartDetails?.map((cartItem) => (
													<div className="d-flex justify-content-between align-content-between" key={cartItem.id}>
														<p className="text-muted text-end" key={cartItem.id}>{`${cartItem.title} x ${cartItem.quantity}`}</p>
														<p>{cartItem.amount}</p>
													</div>
												))
											}
										</div>
										<div className="d-flex justify-content-between">
											<h5>Total</h5>
											<h4 className={`text-end`}>{cartInfo.total}</h4>
										</div>
									</div>
									<hr/>
									<div className={`form-check`}>
										<div className="py-2">
											<input className={`form-check-input`}
												   type="radio"
												   name="checkout"
												   id="bankTransfer"
												   value="bankTransfer"
												   onChange={handleOptionChange}
												   checked={selectedOption === "bankTransfer"}
												   
											/>
											<label className="form-check-label ps-2 pe-4" htmlFor="residential">
												Direct Bank Transfer
											</label>
											{
												selectedOption === "bankTransfer" && (
													<p className="text-min pt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
													</p>
												)
											}
										</div>
										<div className="py-2">
											<input className={`form-check-input`}
												   type="radio"
												   name="checkout"
												   id="creditCard"
												   value="creditCard"
												   onChange={handleOptionChange}
												   checked={selectedOption === "creditCard"}
												   
											/>
											<label className="form-check-label ps-2 pe-4" htmlFor="residential">
												Credit Cards
											</label>
											{
												selectedOption === "creditCard" && (
													<p className="text-min pt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
													</p>
												)
											}
										</div>
										<div className="py-2">
											<input className={`form-check-input`}
												   type="radio"
												   name="checkout"
												   id="COD"
												   value="COD"
												   onChange={handleOptionChange}
												   checked={selectedOption === "COD"}
											/>
											<label className="form-check-label ps-2 pe-4" htmlFor="residential">
												Cash On Delivery
											</label>
											{
												selectedOption === "COD" && (
													<p className="text-min">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
													
												)
											}
										</div>
									</div>
									<div className="text-center py-3">
										<button className="btn btn-primary py-3 px-5 text-white" type={'submit'}>Place order</button>
									</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			<Delivery/>
			<Footer/>
		</>
	)
}
export default CheckoutPage