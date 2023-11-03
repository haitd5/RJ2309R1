import React, {useState} from "react";

function RegistrationForm() {
	const [form, setForm] = useState({})
	
	const handleSubmit = () =>{
		if(form.username && form.password && form.email && form.confirmPassword){
			alert('Sign in success!!!')
		}else {
			alert('Please fill out all the fields!!!')
		}
	}
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}
	return (
		<div>
			<h1>Sign up</h1>
			<form>
				<div className={`mb-3`}>
					<label className={`form-label`}>Username</label>
					<input type={`text`} className={`form-control`} name={`username`} value={`${form.username || ''}`} onChange={handleChange}/>
				</div>
				<div className={`mb-3`}>
					<label className={`form-label`}>Email</label>
					<input type={`email`} className={`form-control`} name={`email`} value={`${form.email || ''}`} onChange={handleChange}/>
				</div>
				<div className={`mb-3`}>
					<label className={`form-label`}>Password</label>
					<input type={`password`} className={`form-control`} name={`password`} value={`${form.password || ''}`} onChange={handleChange}/>
				</div>
				<div className={`mb-3`}>
					<label className={`form-label`}>Confirm password</label>
					<input type={`password`} className={`form-control`} name={`confirmPassword`} value={`${form.confirmPassword || ''}`} onChange={handleChange}/>
				</div>
				<button type={`button`} className={`btn btn-dark mx-2`} onClick={handleSubmit}>Submit</button>
				<button type={`button`} className={`btn btn-warning`}>Cancel</button>
				
			</form>
		</div>
	)
}
export default RegistrationForm;