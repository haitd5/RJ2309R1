import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'


const schema = yup.object({
	title: yup.string().required('Title is a required field'),
	number: yup.number()
		.required('Number is a required field')
		.typeError('Number is a required field')
})


function BookManagement() {
	
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	const [bookLists, setBookLists] = useState([
		{
			title: 'book1',
			number : 3
		},
		{
			title: 'book2',
			number : 4
		},
		{
			title: 'book3',
			number : 2
		},
	])
	
	const [book, setBook] = useState()
	const [nb, setNb] = useState()
	
	const [selectIndex, setSelectIndex] = useState(-1)
	
	const [newBook, setNewBook] = useState()
	const [newNb, setNewNb] = useState()
	
	
	const handleSubmitButton = (data) =>{
		setBookLists([
			...bookLists,
			{
				title: book,
				number: nb
			}
		])
		setBook('')
		setNb('')
	}
	
	const handleRemoveBook = (index) => {
		// console.log(data)
		// Tạo một bản sao mới của mảng bookLists và loại bỏ phần tử tại chỉ mục indexToDelete
		const updatedBookLists = [...bookLists];
		updatedBookLists.splice(index, 1);
		// Cập nhật state với mảng mới đã được chỉnh sửa
		setBookLists(updatedBookLists);
		
	}
	const handleUpdateBook = (idx) => {
		const updateBookList = [...bookLists];
		if(newNb && newBook){
			
			updateBookList[idx] = {
				title: newBook,
				number: newNb
			}
			// console.log(updateBookList[idx])
			setNewBook()
			setNewNb()
		}
			setSelectIndex(-1)
			setBookLists(updateBookList)
		console.log({
			'title': newBook,
			'number': newNb
		})
	}
	const handleCancelEdit = () => {
		setSelectIndex(-1)
		setNewBook()
		setNewNb()
		
	}
	// console.log(newBook)
	return (
		<div>
			<h1>Library</h1>
			<form onSubmit={handleSubmit(handleSubmitButton)}>
				<div className={`from-group mb-3 has-validation`}>
					<label className={`form-label`}>Tiêu đề</label>
					<input type={`text`}
						   className={`form-control ${errors?.title?.message ? 'is-invalid' : ''}`}
						   {...register('title')}
						   value={book}
						   onInput={(e) => setBook(e.target.value)}
					/>
					<span className={`is-invalid text-danger`}>{errors?.title?.message}</span>
				</div>
				<div className={`from-group mb-3 has-validation`}>
					<label className={`form-label`}>Số lượng</label>
					<input type={`number`}
						   className={`form-control ${errors?.number?.message ? 'is-invalid' : ''}`}
						   {...register('number')}
						   value={nb}
						   onInput={(e) => setNb(e.target.value)}
					/>
					<span className={`is-invalid text-danger`}>{errors?.number?.message}</span>
				</div>
				<button type={`submit`} className={`my-2 btn btn-dark`}>Submit</button>
			</form>
			<table className={`table table-striped table-hover`}>
				<thead className={`table-success`}>
					<tr>
						<th>Title</th>
						<th>Number</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						bookLists.map((bookList,index) => (
							<tr key={index}>
								<td>
									{
										selectIndex === index ?
											<input
												className={`form-control`} value={newBook || bookList.title}
												onInput={(e) => {
														setNewBook(e.target.value)
													}
												}
											/> : bookList.title
									}
								</td>
								<td>
									{
										selectIndex === index ?
											<input
												className={`form-control`} value={newNb || bookList.number}
												onInput={(e) => {
													setNewNb(e.target.value)
												}
											}
											/> : bookList.number
									
									}
								</td>
								<td>
									{
										selectIndex === index ? (
											<>
												<span className={`d-inline-block`} data-bs-toggle ={`tooltip`} title={`Save`} tabIndex={`0`}>
													<button className={`btn btn-outline-primary btn-sm me-1 btn-dark`}>
														<i className={`fa-solid fa-floppy-disk text-white`}
															onClick={() => handleUpdateBook(index)}
														></i>
													</button>
												</span>
												<span className={`d-inline-block`} data-bs-toggle ={`tooltip`} title={`Cancel`} tabIndex={`0`}>
													<button className={`btn btn-outline-dark btn-sm btn-primary`}>
														<i className={`fa-solid fa-ban text-white`}
														   onClick={handleCancelEdit}>
															
														</i>
													</button>
												</span>
											</>
										) : (
											<>
												<span className={`d-inline-block`} data-bs-toggle ={`tooltip`} title={`Edit`} tabIndex={`0`}>
													<button className={`btn btn-outline-primary btn-sm me-1`}>
														<i className={`fa-solid fa-pen`}
														   onClick={() =>
														   {
															   setSelectIndex(index)
															   setNewBook(bookLists[index].title)
															   setNewNb(bookLists[index].number)
														   }}>
															
														</i>
													</button>
												</span>
												<span className={`d-inline-block`} data-bs-toggle ={`tooltip`} title={`Delete`} tabIndex={`0`}>
													<button className={`btn btn-outline-danger btn-sm`}>
														<i className={`fa-solid fa-xmark`}
														   onClick={() => handleRemoveBook(index)}>
															
														</i>
													</button>
												</span>
											</>
										)
									}
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}
export default BookManagement;
