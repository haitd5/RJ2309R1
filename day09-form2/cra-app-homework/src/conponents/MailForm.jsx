import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const schema = yup.object({
	to: yup.string().required('Required'),
	title: yup.string().required('Required'),
	message: yup.string().required('Required')
})

function MailForm(){
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	const handleSubmitButton = (data) => {
		alert('Sent successfully!!!')
	}
	return (
		<div>
			<h1>Mail Form</h1>
			<form onSubmit={handleSubmit(handleSubmitButton)}>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>To</label>
					<input type={`email`}
						   className={`form-control ${errors?.to?.message ? 'is-invalid' : ''}`}
						   {...register('to')}/>
					<span className={`is-invalid text-danger`}>{errors?.to?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Title</label>
					<input type={`text`}
						   className={`form-control ${errors?.titel?.message ? 'is-invalid' : ''}`}
						   {...register('title')}
					/>
					<span className={`is-invalid text-danger`}>{errors?.title?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Message</label>
					<textarea className={`form-control ${errors?.message?.message ? 'is-invalid' : ''}`}
							  {...register('message')}>
						
					</textarea>
					<span className={`is-invalid text-danger`}>{errors?.message?.message}</span>
				</div>
				<div className={`d-flex my-2`}>
					<button type={`button`} className={`btn btn-dark me-3`}>Choose File</button>
					<p className={`my-auto `}>No file chosen</p>
				</div>
				<button type={`submit`} className={`btn btn-primary`}>Submit</button>
			</form>
		</div>
	)
}
export default MailForm;