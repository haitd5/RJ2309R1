import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import {useNavigate} from "react-router-dom";

const schema = yup.object({
	account: yup.string().required(),
	password: yup.string().required()
})

function Login() {
	const navigate = useNavigate()
	
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	const handleButtonSubmit = (data) =>{
		if (data.account === 'admin@gmail.com' && data.password === 'letmein'){
			navigate('/employee')
		}else {
			alert('account and password errors')
		}
		
	}
	
	
	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(handleButtonSubmit)}>
				<div className={`form-group has-validation`}>
					<label className={`form-label`}>Account</label>
					<input className={`form-control ${errors?.account?.message ? 'is-invalid' : ''}`}
						   type={`email`}
						   {...register('account')}/>
					<span className={`text-danger invalid-feedback`}>{errors?.account?.message}</span>
				</div>
				<div className={`form-group`}>
					<label className={`form-label`}>Password</label>
					<input className={`form-control ${errors?.password?.message ? 'is-invalid' : ''}`}
						   type={`password`}
						   {...register('password')}/>
					<span className={`text-danger invalid-feedback`}>{errors?.password?.message}</span>
				</div>
				<button className={`btn btn-dark my-3`} type={`submit`}>Submit</button>
			</form>
		</>
	)
}
export default Login;