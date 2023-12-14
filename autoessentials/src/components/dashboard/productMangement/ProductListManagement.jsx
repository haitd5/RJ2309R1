import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaEdit, FaEye, FaTrash, FaUpload} from "react-icons/fa";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {toast} from "react-toastify";
// import NoAvatar from "../../../assest/image/no-avatar.png"
// import fileServices from "../../services/fileServices";
import Swal from "sweetalert2";
// import {addNewProductThunkAction, fetchProductThunkAction} from "../../../slices/productsSlide";
import {loadingManageSelector, productListSelector, productPaginationSelector} from "../../../redux-toolkit/selectors";
import useFetchResource from "../../../custom-hook/useFetchResource";
import {CATEGORY_API_URL} from "../../../services/common";
import fileServices from "../../../services/fileServices";
import EditProductModal from "./EditProductModal";
import {
	addNewProductThunkAction,
	fetchProductPaginationThunkAction,
	removeProductByIdThunkActon
} from "../../../slices/manageProductSlide";
import axios from "axios";

const schema = yup.object({
	title: yup.string().required(),
	category: yup.string().required(),
	newPrice: yup.number().positive().required().typeError('Price is required'),
	description: yup.string().required(),
	// img: yup.string().required(),
})

function ProductListManagement() {
	const dispatch = useDispatch()
	const [openAddProductArea, setOpenAddProductArea] = useState(false)
	const [selectProduct, setSelectProduct] = useState({})
	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(10)
	const [direction, setDirection] = useState('next')
	const [field, setField] = useState('id')
	const [order, setOrder] = useState('asc')
	const [selectFile, setSelectFile] = useState()
	const [temporaryPhoto, setTemporaryPhoto] = useState()
	const [uploading, setUploading] = useState(false)
	const {products, pagination} = useSelector(productPaginationSelector)
	useEffect(() => {
		dispatch(fetchProductPaginationThunkAction({
			_page: page,
			_limit: pageSize,
			_sort: field,
			_order: order
		}))
	},[dispatch, page, pageSize, field, order])
	const categoryList = useFetchResource(CATEGORY_API_URL)
	const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm({
		resolver: yupResolver(schema)
	})
	const loading = useSelector(loadingManageSelector)
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
		setSelectFile()
		setTemporaryPhoto()
		// setOpenAddProductArea(false)
		toast.success(`add product success`, )
	}
	const handleCloseAddProduct = () => {
		setOpenAddProductArea(false)
		reset()
		setSelectFile()
		setTemporaryPhoto()
	}
	const handleSelectPhoto = (e) => {
		if (e.target.files[0]?.name) {
			const fake_photo = URL.createObjectURL(e.target.files[0])
			setTemporaryPhoto(fake_photo)
			setSelectFile(e.target.files[0])
		}
	}
	const handleUploadPhoto = async (e) => {
		e.stopPropagation()
		setUploading(true)
		const formData = new FormData();
		formData.append('file', selectFile)
		formData.append('upload_preset', 'jhajqjvc')
		let uploadResult = await axios.post('https://api.cloudinary.com/v1_1/deiyf3lf7/image/upload', formData)
		setTemporaryPhoto(uploadResult?.data?.secure_url)
		setValue('img', uploadResult?.data?.secure_url)
		toast.info('Photo uploaded success!')
		setUploading(false)
	}
	const handleSelectProduct = (product) => {
		setSelectProduct(product)
	}
	const handleNextPage = () => {
		if (page < pagination.totalPage) {
			setPage(page + 1)
			setDirection('next')
		}
	}
	
	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
			setDirection('prev')
		}
	}
	const handleChangePageSize = (e) => {
		setPageSize(Number(e.target.value))
		setPage(1)
		setDirection('next')
	}
	const handleRemoveProduct = (product) => {
		Swal.fire({
			title: "Confirm remove product",
			text: `Are you sure to remove product: ${product.title}?`,
			showCancelButton: true,
			confirmButtonColor: '#d33'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(removeProductByIdThunkActon(product))
				toast(`Product ${product.title} removed success!`)
			}
		})
	}
	return (
		<>
			<div className={`container px-5`}>
				<EditProductModal selectProduct = {selectProduct} setSelectProduct = {setSelectProduct}/>
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
									<div className={`col-md-5`}>
										<div className="border-dashed w-100 h-100" onClick={() => document.getElementById('file-photo').click()}>
											{
												temporaryPhoto ? (
													<div role="button" className="d-flex flex-column align-items-center justify-content-between w-100 h-100 text-secondary">
														<img style={{ maxWidth: '400px', maxHeight: '350px' }} src={temporaryPhoto} alt="" />
														{
															uploading ? (
																<button type="button" className="btn btn-secondary btn-sm d-flex align-items-center mt-2" disabled>
																	<FaUpload className="me-3" />
																	Uploading...
																</button>
															) : (
																<button type="button" className="btn btn-secondary btn-sm d-flex align-items-center mt-2"
																		onClick={handleUploadPhoto}
																>
																	<FaUpload className="me-3" />
																	Upload
																</button>
															)
														}
													</div>
												) : (
													<div role="button" className="d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary">
														<FaUpload size={50} className="mb-2" />
														<span className="text-decoration-underline">Browse a photo</span>
													</div>
												)
											}
											<input id="file-photo" type="file" accept="image/*" className="d-none"
												   onChange={handleSelectPhoto}
											/>
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
					<div className="col-md-12 d-flex align-items-center my-2">
						<div className="d-flex align-items-center">
							<span className="me-2">Field</span>
							<select className="form-select form-select-sm" defaultValue={'id'}
									onChange={(e) => setField(e.target.value)}
							>
								<option value={'id'}>ID</option>
								<option value={'title'}>Title</option>
							</select>
						</div>
						<div className="d-flex align-items-center">
							<span className="mx-2">Order</span>
							<select className="form-select form-select-sm" defaultValue={'asc'}
									onChange={(e) => setOrder(e.target.value)}
							>
								<option value={'asc'}>Ascendent</option>
								<option value={'desc'}>Descendent</option>
							</select>
						</div>
					</div>
					{
						loading === 'loading' ? (
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
							<table className={`table table-striped table-hover rounded-3 border-3 border`} style={{background: "white"}}>
								<thead className={`bg-info`}>
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
									products?.map((product) => (
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
													<FaEdit className={`me-2 text-success`}
															onClick={() => handleSelectProduct(product)}
															role={'button'}
													/>
													<FaTrash className={`text-danger`}
															 onClick={() => handleRemoveProduct(product)}
															 role={'button'}
													/>
												</div>
											</td>
										</tr>
									))
								}
								</tbody>
							</table>
						)
					}
					<div className="d-flex align-items-center justify-content-between">
						<ul className="pagination my-0">
							<li className={`page-item ${direction === 'prev' ? 'active' : ''} ${page <= 1 ? 'disabled' : ''}`}>
								<button className="page-link" onClick={handlePreviousPage}>Previous</button>
							</li>
							<li className={`page-item ${direction === 'next' ? 'active' : ''} ${page >= pagination.totalPage ? 'disabled' : ''}`}>
								<button className="page-link" onClick={handleNextPage}>Next</button>
							</li>
						</ul>
						<div className="d-flex align-items-center">
							<span style={{ width: '120px' }}>Items per page</span>
							<select style={{ width: '50px' }} className="form-control" defaultValue={10}
									onChange={handleChangePageSize}
							>
								<option value={10}>10</option>
								<option value={30}>30</option>
								<option value={50}>50</option>
								<option value={100}>100</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductListManagement