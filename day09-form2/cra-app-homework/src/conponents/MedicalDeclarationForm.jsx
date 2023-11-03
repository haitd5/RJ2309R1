import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const schema = yup.object({
	name: yup.string().required(),
	cmnd: yup.number()
		// .min(9)
		.required(),
	dob: yup.date().required(),
	gender: yup.string().required(),
	nationality: yup.string().required(),
	company: yup.string().required(),
	workingParts: yup.string().required(),
	province: yup.string().required(),
	district: yup.string().required(),
	ward: yup.string().required(),
	street: yup.string().required(),
	phone: yup.number().required(),
	email: yup.string().required(),
	visit: yup.string().required()
})

function MedicalDeclarationForm(){
	const {
		register,
		handleSubmit,
		formState:{errors}
	} = useForm({
		resolver: yupResolver(schema)
	})
	
	const handleSubmitButton = (data) => {
		console.log(data)
	}
	
	return (
		<div>
			<h1>Tờ khai báo y tế</h1>
			<form onSubmit={handleSubmit(handleSubmitButton)}>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Họ Tên</label>
					<input type={`text`}
						   className={`form-control ${errors?.name?.message ? 'is-invalid' : ''}`}
						   placeholder={`Tên..`}
						   {...register('name')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.name?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Số hộ chiếu /CMND</label>
					<input type={`number`}
						   className={`form-control ${errors?.cmnd?.message ? 'is-invalid' : ''}`}
						   placeholder={`CMND..`}
						   {...register('cmnd')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.cmnd?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Ngày tháng năm sinh</label>
					<input type={`date`}
						   className={`form-control ${errors?.dob?.message ? 'is-invalid' : ''}`}
						   placeholder={`Năm sinh..`}
						   {...register('dob')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.dob?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Giới Tính</label>
					<div>
						<div className='form-check form-check-inline'>
							<input className={`form-check-input ${errors?.gender?.message ? 'is-invalid' : ''}`}
								   type='radio' value='male'
								   {...register('gender')}
							/>
							<label className='form-check-label'>Male</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className={`form-check-input ${errors?.gender?.message ? 'is-invalid' : ''}`}
								   type='radio' value='female'
								   {...register('gender')}
							/>
							<label className='form-check-label'>Female</label>
						</div>
						<span className='invalid-feedback d-block'>{errors?.gender?.message}</span>
					</div>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Quốc Tịch</label>
					<input type={`text`}
						   className={`form-control ${errors?.nationality?.message ? 'is-invalid' : ''}`}
						   placeholder={`Quốc Tịch..`}
						   {...register('nationality')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.nationality?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Công Ty Làm Việc</label>
					<input type={`text`}
						   className={`form-control ${errors?.company?.message ? 'is-invalid' : ''}`}
						   placeholder={`Công Ty Làm Việc..`}
						   {...register('company')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.company?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Bộ Phận Làm Việc</label>
					<input type={`text`}
						   className={`form-control ${errors?.workingParts?.message ? 'is-invalid' : ''}`}
						   placeholder={`Bộ Phận Làm Việc..`}
						   {...register('workingParts')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.workingParts?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation d-flex`}>
					<label className={`form-label`}>Có Thẻ bảo hiểm y tế</label>
					<input type={`checkbox`} className={`form-check-input mx-2`}/>
				</div>
				<h3>Địa chỉ liên lạc tại Việt Nam</h3>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Tỉnh Thành</label>
					<input type={`text`}
						   className={`form-control ${errors?.province?.message ? 'is-invalid' : ''}`}
						   placeholder={`Tỉnh Thành..`}
						   {...register('province')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.province?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Quận /Huyện</label>
					<input type={`text`}
						   className={`form-control ${errors?.district?.message ? 'is-invalid' : ''}`}
						   placeholder={`Quận /Huyện..`}
						   {...register('district')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.district?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Phường /Xã</label>
					<input type={`text`}
						   className={`form-control ${errors?.ward?.message ? 'is-invalid' : ''}`}
						   placeholder={`Phường /Xã..`}
						   {...register('ward')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.ward?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Số nhà, phố, tổ dân phố /thôn /đội</label>
					<input type={`text`}
						   className={`form-control ${errors?.street?.message ? 'is-invalid' : ''}`}
						   placeholder={`Số nhà, phố, tổ dân phố /thôn /đội..`}
						   {...register('street')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.street?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Điện Thoại</label>
					<input type={`number`}
						   className={`form-control ${errors?.phone?.message ? 'is-invalid' : ''}`}
						   placeholder={`Điện Thoại..`}
						   {...register('phone')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.phone?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Email</label>
					<input type={`email`}
						   className={`form-control ${errors?.email?.message ? 'is-invalid' : ''}`}
						   placeholder={`Email..`}
						   {...register('email')}
					/>
					<span className={`invalid-feedback text-danger`}>{errors.email?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Trong vòng 14 ngày qua Anh/Chị có đến quốc gia / vùng lãnh thổ
						nào(có thể đi qua nhiều quốc gia)</label>
					<textarea
						className={`form-control ${errors?.visit?.message ? 'is-invalid' : ''}`}
						{...register('visit')}
					>
					</textarea>
					<span className={`invalid-feedback text-danger`}>{errors.visit?.message}</span>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Trong vòng 14 ngày qua Anh/Chị có thấy xuất hiện dấu hiệu nào
						sau đây không?</label>
					<div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Sốt</label>
						</div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Ho</label>
						</div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Khó Thở</label>
						</div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Viêm phổi</label>
						</div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Đau Họng</label>
						</div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Mệt mỏi</label>
						</div>
					</div>
				</div>
				<div className={`form-group mb-3 has-validation`}>
					<label className={`form-label`}>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với?</label>
					<div>
						<div>
							<input type={"checkbox"} id={`asd`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
						</div>
						<div>
							<input type={"checkbox"} id={`asd`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Ho</label>
						</div>
						<div>
							<input type={"checkbox"} id={`asd`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Người từ nước ngoài có bệnh COVID-19</label>
						</div>
						<div>
							<input type={"checkbox"} id={`sick`} className={`form-check-input me-2`}/>
							<label className={`form-label`}>Người có biểu hiện (sốt, ho, khó thở, viêm phổi)</label>
						</div>
					</div>
				</div>
				
				<button type={`submit`} className={`btn btn-dark`}>Submit</button>
			</form>
		</div>
	)
}
export default MedicalDeclarationForm;