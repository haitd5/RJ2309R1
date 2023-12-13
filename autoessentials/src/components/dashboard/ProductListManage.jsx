import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewProductThunkAction, fetchProductThunkAction} from "../../slices/productsSlide";
import {productListSelector} from "../../redux-toolkit/selectors";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";
import useFetchResource from "../../custom-hook/useFetchResource";
import {CATEGORY_API_URL} from "../../services/common";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {toast} from "react-toastify";
import NoAvatar from "../../assest/image/no-avatar.png"
import fileServices from "../../services/fileServices";
import Swal from "sweetalert2";

const schema = yup.object({
	title: yup.string().required(),
	category: yup.string().required(),
	newPrice: yup.number().positive().required().typeError('Price is required'),
	description: yup.string().required()
})

function ProductListManage() {
	const dispatch = useDispatch()
	const productList = useSelector(productListSelector)
	const [openAddProductArea, setOpenAddProductArea] = useState(false)
	const [temporaryAvatar, setTemporaryAvatar] = useState()
	const [fileAvatar, setFileAvatar] = useState({})
	useEffect(() => {
		dispatch(fetchProductThunkAction())
	},[])
	const categoryList = useFetchResource(CATEGORY_API_URL)
	const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm({
		resolver: yupResolver(schema)
	})
	const handleAddNewProduct = (data) => {
		if (!data?.img) {
			Swal.fire({
				'title': 'Alert!',
				'text': 'You need upload a photo first!'
			})
			return;
		}
		let newProduct = {
			...data,
			prevPrice: 0,
			star: 0,
			reviews: 0
		}
		dispatch(addNewProductThunkAction(newProduct))
		reset()
		setTemporaryAvatar()
		setFileAvatar()
		toast.success(`add success`, {autoClose : 1000, position: "bottom-right"})
	}
	const handleCloseAddProduct = () => {
		setOpenAddProductArea(true)
		reset()
		setTemporaryAvatar()
		setFileAvatar()
	}
	const handleSelectAvatar = (e) => {
		if(e.target.files[0]){
			const temporaryAvatar = URL.createObjectURL(e.target.files[0])
			setTemporaryAvatar(temporaryAvatar)
			setFileAvatar(e.target.files[0])
		}
		
	}
	const handleUploadAvatar = async () => {
		let uploadRes = await fileServices.upload(fileAvatar)
		setTemporaryAvatar(uploadRes.data.secure_url)
		setValue('img', uploadRes.data.secure_url)
		toast.success(`Avatar uploaded success`, {autoClose : 1000, position: "bottom-right"})
	}
	return (
		<>
			<div className={`container px-5`}>
				<div className={`row`}>
					<div className={`col-lg-12 d-flex align-items-center justify-content-between`}>
						<h3>Product List Management</h3>
						<button className={`btn btn-primary`}
								type={'button'}
								onClick={() => setOpenAddProductArea(true)}
						>Add new product</button>
					</div>
				</div>
				{
					openAddProductArea && (
						<div className={`row`}>
							<form onSubmit={handleSubmit(handleAddNewProduct)}>
								<div className={`row`}>
									<div className={`col-md-7`}>
										<div className={`mb-3 form-group has-validation`}>
											<label className={`form-label`}>Product name</label>
											<input type={`text`}
												   placeholder={'Product name'}
												   className={`form-control ${errors?.title?.message ? 'is-invalid' : ''}`}
												   {...register('title')}/>
											<span className='invalid-feedback'>{errors?.title?.message}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="formFile" className="form-label">Category</label>
											<select className={`form-control ${errors?.category?.message ? 'is-invalid' : ''}`}
													defaultValue={''}
													{...register('category')}
											>
												<option value={''} disabled>Please select category</option>
												{
													categoryList?.map((cat) =>(
														<option key={cat.id} value={cat.name}>{cat.name}</option>
													))
												}
											</select>
											<span className='invalid-feedback'>{errors?.category?.message}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="formFile" className="form-label">Price</label>
											<input className={`form-control ${errors?.newPrice?.message ? 'is-invalid' : ''}`}
												   type="number"
												   placeholder={`Price`}
												   {...register('newPrice')}
											/>
											<span className='invalid-feedback'>{errors?.newPrice?.message}</span>
										</div>
										<div className="mb-3">
											<div className="form-floating">
										<textarea className={`form-control ${errors?.description?.message ? 'is-invalid' : ''}`}
												  placeholder="Leave a comment here"
												  id="floatingTextarea"
												  style={{height: "100px"}}
												  {...register('description')}
										></textarea>
												<label htmlFor="floatingTextarea">Description</label>
												<span className='invalid-feedback'>{errors?.description?.message}</span>
											</div>
										</div>
									</div>
									<div className={`col-md-5 d-flex flex-column justify-content-center align-items-center pt-3`}>
										<div className={`form-group`}>
											<img src={temporaryAvatar || NoAvatar} alt="" className={`img-fluid`}
												 style={{width: "300px", maxWidth: "230px", maxHeight: "350px"}}
												 onClick={() => document.getElementById('fileAvatar').click()}
												 role={`button`}
											/>
											<input type={`file`} className={`d-none`} id={`fileAvatar`}
												   accept={`image/*`}
												   onChange={handleSelectAvatar}
											/>
										</div>
										<div>
											<button type={`button`} className={`btn btn-secondary my-3`}
													onClick={handleUploadAvatar}
											>
												Upload
											</button>
										</div>
									</div>
								</div>
								<div className={`text-center`}>
									<button className={`btn btn-primary me-2`} type={'submit'}>Add</button>
									<button className={`btn btn-dark`} type={'button'} onClick={handleCloseAddProduct}>Close</button>
								</div>
							</form>
						</div>
					)
				}
				
				<div className={`row`}>
					<table className={`table table-striped table-hover`}>
						<thead>
							<tr>
								<td className={`text-center`}></td>
								<td className={`text-center`}>Title</td>
								<td className={`text-center`}>Category</td>
								<td className={`text-center`}>Price</td>
								<td className={`text-center`}>Rate</td>
								<td className={`text-center`}>Action</td>
							</tr>
						</thead>
						<tbody>
							{
								productList?.map((product) => (
									<tr key={product.id}>
										<td className={`text-center align-middle`}>
											<img src={product.img} alt="" style={{width: "30px", maxWidth: "30px"}}/>
										</td>
										<td className={`text-center align-middle`}>{product.title}</td>
										<td className={`text-center align-middle`}>{product.category}</td>
										<td className={`text-center align-middle`}>
											<div className={`d-flex flex-column`}>
												<del>${product.prevPrice}</del>
												<span>${product.newPrice}</span>
											</div>
											
										</td>
										<td className={`text-center align-middle`}>
											<div className={`d-flex flex-column justify-content-center align-items-center`}>
												<div className={`d-flex align-items-center`}>
													<span>
														{
															new Array(Number( product.star)).fill(1).map((value, index) => (
															<i key={index} className="fa-solid fa-star" style={{ color: "#F4CE14" }}></i>))
														}
													</span>
												</div>
												<div>
													<span className={`me-1`}>{product.reviews}</span>
													<FaEye color={'green'}/>
												</div>
											</div>
										</td>
										<td className={`text-center align-middle`}>
											<div className={`d-flex align-items-center justify-content-center`}>
												<FaEdit className={`me-2 text-success`}/>
												<FaTrash className={`text-danger`}/>
											</div>
										</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
export default ProductListManage