import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import { toast} from 'react-toastify';
import Swal from "sweetalert2";


const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().required().email(),
	dob: yup.date().required().typeError('dob is a required field'),
	avatar: yup.string().required().url(),
	gender: yup.string().required()
})


function TeacherList() {
	
	const [teacherList, setTeacherList] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [departmentList, setDepartmentList] = useState([])
	const [removeTeacher, setRemoveTeacher] = useState({})
	const [toggleForm, setToggleForm] = useState(false)
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	useEffect(() => {
		setIsLoading(true)
		fetch('https://6547833d902874dff3ac6769.mockapi.io/teachers')
			.then((response) => response.json())
			.then((data) => {
				setTeacherList(data)
				setIsLoading(false)
			})
	},[removeTeacher])
	
	useEffect(() => {
		setIsLoading(true)
		fetch('https://6547833d902874dff3ac6769.mockapi.io/department')
			.then((res) => res.json())
			.then((data) => {
				setDepartmentList(data)
				setIsLoading(false)
			})
	},[])
	
	const handleAddTeacher = (data) => {
		data.department = JSON.parse(data.department)
		setIsLoading(true)
		fetch('https://6547833d902874dff3ac6769.mockapi.io/teachers',{
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((result) => {
				toast.success(`Teacher ${result.name} added success !`)
				fetch('https://6547833d902874dff3ac6769.mockapi.io/teachers')
					.then((res) => res.json())
					.then((data) => {
						setTeacherList(data)
						setIsLoading(false)
						reset()
					})
			})
	}
	
	const handleRemoveTeacher = (teacher) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://6547833d902874dff3ac6769.mockapi.io/teachers/${teacher.id}`,{
					method: 'DELETE'
				})
					.then((res) => res.json())
					.then((result) => {
						toast.success(`Teacher ${result.name} remove success`)
						setRemoveTeacher(result)
					})
			}
		});
		// let confirm = window.confirm(`Are you sure remove teacher ${teacher.name}`)
		// if(confirm){
		// 	fetch(`https://6547833d902874dff3ac6769.mockapi.io/teachers/${teacher.id}`,{
		// 		method: 'DELETE'
		// 	})
		// 		.then((res) => res.json())
		// 		.then((result) => {
		// 			toast.success(`Teacher ${result.name} remove success`)
		// 			setRemoveTeacher(result)
		// 		})
		// }
	}
	return (
		<>
			<div>
				<h3>Teacher List</h3>
			</div>
			<section>
				<div>
					<button className={`btn btn-warning`} onClick={() => setToggleForm(!toggleForm)}>Add teacher</button>
				</div>
				<div>
					{toggleForm && (
						<form onSubmit={handleSubmit(handleAddTeacher)}>
							<div className={`row`}>
								<div className={`col-md-6`}>
									<div className={`form-group mb-3 has-validation`}>
										<label className={`form-label`}>FullName<span className={`text-danger`}>(*)</span></label>
										<input
											className={`form-control ${errors?.name?.message ? 'is-invalid' : ''}`}
											type={`text`} placeholder={`FullName...`}
											{...register('name')}
										/>
										<span className={`text-danger invalid-feedback`}>{errors?.name?.message}</span>
									</div>
									<div className={`form-group mb-3`}>
										<label className={`form-label`}>Email<span className={`text-danger`}>(*)</span></label>
										<input
											className={`form-control ${errors?.email?.message ? 'is-invalid' : ''}`}
											type={`email`}
											placeholder={`Email...`}
											{...register('email')}
										/>
										<span className={`text-danger invalid-feedback`}>{errors?.email?.message}</span>
									</div>
									<div className={`form-group mb-3`}>
										<label className={`form-label`}>DOB<span className={`text-danger`}>(*)</span></label>
										<input
											className={`form-control ${errors?.dob?.message ? 'is-invalid' : ''}`}
											type={`date`}
											placeholder={'dob...'}
											{...register('dob')}
										/>
										<span className={`text-danger invalid-feedback`}>{errors?.dob?.message}</span>
									</div>
									<div className={`form-group mb-3`}>
										<button type={`submit`} className={`btn btn-sm btn-dark me-3`}>Create</button>
										<button type={`button`} className={`btn btn-sm btn-warning`} onClick={() => reset()}>Cancel</button>
										
									</div>
								</div>
								<div className={`col-md-6`}>
									<div className={`form-group mb-3`}>
										<label className={`form-label`}>Avatar<span className={`text-danger`}>(*)</span></label>
										<input
											className={`form-control ${errors?.avatar?.message ? 'is-invalid' : ''}`}
											type={`url`}
											{...register('avatar')}/>
										<span className={`text-danger invalid-feedback`}>{errors?.avatar?.message}</span>
									</div>
									<div className={`form-group mb-3`}>
										<label className={`form-label`}>Gender</label>
										<div className={`mt-2`}>
											<div className={`form-check form-check-inline`}>
												<input className={`form-check-input`} type={`radio`} value={`male`} {...register('gender')}/>
												<label className={`form-check-label`}>Male</label>
											</div>
											<div className={`form-check form-check-inline`}>
												<input className={`form-check-input`} type={`radio`} value={`female`} {...register('gender')}/>
												<label className={`form-check-label`}>Female</label>
											</div>
										</div>
										<span className={`text-danger`}>{errors?.gender?.message}</span>
									</div>
									<div className={`form-group mb-3`}>
										<label className={`form-label`}>Department</label>
										<select className={`form-control`} {...register('department')}>
											{
												departmentList.map((depart) => (
													<option value={JSON.stringify(depart)}>{depart.name}</option>
												))
											}
										
										</select>
									</div>
								</div>
							</div>
						</form>
					)}
				</div>
			</section>
			<section>
				{
					isLoading ? (<p>Loading .... </p>) : (
						<>
							<table className={`table`}>
								<thead>
								<tr>
									<th>#ID</th>
									<th>FullName</th>
									<th>DOB</th>
									<th>Email</th>
									<th>Gender</th>
									<th>Department</th>
									<th>Actions</th>
								</tr>
								</thead>
								<tbody>
								{
									teacherList.map((teacher) => (
										<tr key={teacher.id}>
											<td>{teacher.id}</td>
											<td>
												<div className={`d-flex align-items-center`}>
													<img className={`rounded-circle avatar-sm me-2`} src={teacher.avatar} alt={''}/>
													{teacher.name}
												</div>
											</td>
											<td>{dayjs(teacher.dob).format('DD/MM/YYYY')}</td>
											<td>{teacher.email}</td>
											<td>{teacher.gender}</td>
											<td>{teacher.department?.name}</td>
											<td>
												<Link to={`/teacher/${teacher.id}`} className={`btn btn-primary btn-sm me-1`}>Detail</Link>
												<Link to={`/teacher/modify/${teacher.id}`} className={`btn btn-dark btn-sm me-1`}>Modify</Link>
												<button type={`button`}
														className={`btn btn-sm btn-danger`}
														onClick={() => handleRemoveTeacher(teacher)}
												>Delete</button>
											</td>
										</tr>
									))
								}
								</tbody>
							</table>
						</>
					)
				}
			</section>
		</>
	)
}
export default TeacherList;