import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import dayjs from "dayjs";
import TeacherService from "../service/teacherService";
import Spinner from "../components/Spinner";



function TeacherDetail() {
	
	const {teacherId} = useParams()
	const [teacherDetail, setTeacherDetail] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	
	useEffect(() => {
		setIsLoading(true)
		async function getTeacher() {
			let teacherRes = await TeacherService.getTeacher(teacherId)
			setTeacherDetail(teacherRes.data)
			setIsLoading(false)
		}
		getTeacher();
	}, [teacherId])
	return (
		<>
			<div>
				<h3>Teacher Detail</h3>
				<Link to={`/teacher`}>Back to list</Link>
			</div>
			{
				isLoading ? (<Spinner/>) : (
					<div className={`row d-flex align-items-center justify-content-center`}>
						<div className={`col-md-2`}>
							<img className={`avatar-md`} src={teacherDetail.avatar} alt={''}/>
						</div>
						<div className={`col-md-10`}>
							<div>FullName: {teacherDetail.name}</div>
							<div>Email: {teacherDetail.email}</div>
							<div>DOB: {dayjs(teacherDetail.dob).format('DD/MM/YYYY')}</div>
							<div>Gender: {teacherDetail.gender ? 'Male' : 'Female'}</div>
							<div>Department: {teacherDetail.department?.name}</div>
						</div>
					</div>
				)
			}
			
		</>
	)
}
export default TeacherDetail;