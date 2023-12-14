import React, {useEffect, useState} from "react";
import NoAvatar from "../../../assest/image/no-avatar.png";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {toast} from "react-toastify";
import useFetchResource from "../../../custom-hook/useFetchResource";
import {CATEGORY_API_URL} from "../../../services/common";
import {useDispatch} from "react-redux";
import {editProductThunkAction} from "../../../slices/manageProductSlide";

const schema = yup.object({
	title: yup.string().required(),
	category: yup.string().required(),
	newPrice: yup.number().positive().required().typeError('Price is required'),
	description: yup.string().required()
})

function EditProductModal({selectProduct,setSelectProduct}) {
	const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
		resolver: yupResolver(schema)
	})
	const categoryList = useFetchResource(CATEGORY_API_URL)
	const dispatch = useDispatch()
	const [currenProduct, setCurrenProduct] = useState({})
	const [loading, setLoading] = useState(false)
	useEffect(() =>{
		setLoading(true)
		async function getProductById() {
			let productRes = await fetch(`https://jsonserver-api-nmel.vercel.app/productList/${selectProduct?.id}`)
			let product = await productRes.json()
			setCurrenProduct(product)
			setLoading(false)
			setValue("title", product.title)
			setValue("category", product.category)
			setValue("newPrice", product.newPrice)
			setValue("description", product.description)
		}
		getProductById()
	},[selectProduct?.id])
	const handleCloseEditModal = () => {
		setSelectProduct({})
		reset()
	}
	const handleSaveProduct = (data) => {
		let editProduct = {
			...currenProduct,
			...data,
			prevPrice: Number(data.newPrice) !== Number(currenProduct.newPrice) ? currenProduct.newPrice : currenProduct.prevPrice
		}
		dispatch(editProductThunkAction(editProduct))
		toast.success('Product updated success')
		setSelectProduct({})
	}
	return (
		<>
			<div className="modal fade show" style={{display: `${selectProduct?.id ? 'block' : 'none'}`}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<form onSubmit={handleSubmit(handleSaveProduct)}>
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">Modify Product</h5>
								<button type="button" className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
										onClick={handleCloseEditModal}
								></button>
							</div>
							<div className="modal-body">
								{
									loading ? (
										<div className={`text-center`}>
											<div className="spinner-border text-primary" role="status">
												<span className="visually-hidden">Loading...</span>
											</div>
											<div className="spinner-border text-secondary" role="status">
												<span className="visually-hidden">Loading...</span>
											</div>
											<div className="spinner-border text-success" role="status">
												<span className="visually-hidden">Loading...</span>
											</div>
											<div className="spinner-border text-danger" role="status">
												<span className="visually-hidden">Loading...</span>
											</div>
										</div>
									) : (
										<div className={`row`}>
											<div className={`col-md-12`}>
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
													<select className={`form-select ${errors?.category?.message ? 'is-invalid' : ''}`}
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
											{/*<div className={`col-md-4 d-flex flex-column justify-content-center align-items-center pt-3`}>*/}
											{/*	<div className={`form-group`}>*/}
											{/*		<img src={NoAvatar} alt="" className={`img-fluid`}*/}
											{/*			 style={{width: "300px", maxWidth: "230px", maxHeight: "350px"}}*/}
											{/*			 onClick={() => document.getElementById('fileAvatar').click()}*/}
											{/*			 role={`button`}*/}
											{/*		/>*/}
											{/*		/!*temporaryAvatar ||*!/*/}
											{/*		<input type={`file`} className={`d-none`} id={`fileAvatar`}*/}
											{/*			   accept={`image/*`}*/}
											{/*			// onChange={handleSelectAvatar}*/}
											{/*		/>*/}
											{/*	</div>*/}
											{/*	<div>*/}
											{/*		<button type={`button`} className={`btn btn-secondary my-3`}*/}
											{/*		*/}
											{/*		>*/}
											{/*			/!*onClick={handleUploadAvatar}*!/*/}
											{/*			Upload*/}
											{/*		</button>*/}
											{/*	</div>*/}
											{/*</div>*/}
										</div>
									)
								}
							</div>
							<div className="modal-footer">
								<button type="button"
										className="btn btn-dark"
										data-bs-dismiss="modal"
										onClick={handleCloseEditModal}
								>Cancel</button>
								<button type="submit"
										className="btn btn-primary"
										
								>Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
export default EditProductModal