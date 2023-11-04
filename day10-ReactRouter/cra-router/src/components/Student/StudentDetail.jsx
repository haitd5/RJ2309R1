import React from "react";
import {useParams} from "react-router-dom";

function StudentDetail(){
	const {studentId, name} = useParams()
	
	return(
		<>
			<h1>Student Detail {studentId}</h1>
			<p>{name}</p>
		</>
	)
}
export default StudentDetail;