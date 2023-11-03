import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'


const schema = yup.object({
	fullName: yup.string().required(),
	email: yup.string().required(),
	phone: yup.number().required()
})
function ContactForm() {
	
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	const handleSubmitButton = (data) => {
		alert('Add contact successfully!!!')
	}
	return (
		<div>
			<h1>Contact Form</h1>
			<form onSubmit={handleSubmit(handleSubmitButton)}>
				<div className={`mb-3 form-group has-validation`}>
					<label className={`form-label`}>Name</label>
					<input type={`text`}
						   className={`form-control ${errors?.fullName?.message ? 'is-invalid' : ''}`}
						   {...register('fullName')}/>
					<span className='invalid-feedback'>{errors?.fullName?.message}</span>
				</div>
				<div className={`mb-3 form-group has-validation`}>
					<label className={`form-label`}>Email</label>
					<input type={`email`}
						   className={`form-control ${errors?.email?.message ? 'is-invalid' : ''}`}
						   {...register('email')}/>
					<span className='invalid-feedback'>{errors?.email?.message}</span>
				</div>
				<div className={`mb-3 form-group has-validation`}>
					<label className={`form-label`}>Phone</label>
					<input type={`number`}
						   className={`form-control ${errors?.phone?.message ? 'is-invalid' : ''}`}
						   {...register('phone')}/>
				</div>
				<div className={`mb-3 form-group has-validation`} >
					<label className={`form-label`}>Message</label>
					<textarea className={`form-control`} {...register('message')}></textarea>
				</div>
				<button className={`btn btn-dark`}>Submit</button>
			</form>
		</div>
	)
}
export default ContactForm