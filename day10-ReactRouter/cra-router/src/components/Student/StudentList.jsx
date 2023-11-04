import React, { useEffect } from "react";
import {Link,useNavigate} from "react-router-dom";

function StudentList() {
    const navigate = useNavigate()
    
    const studentList = [
        {
            id: 1,
            name: 'david'
        },
        {
            id: 2,
            name: 'alex'
        },
        {
            id: 3,
            name: 'leon'
        },
    ]
    
    useEffect(() => {
        return () => {
            console.log("unmounted StudentList");
        };
    }, []);
    
    const handleNavigate = () =>{
        navigate('/student/add')
    }
    return (
        <>
            <div className={`d-flex align-items-center`}>
                <h1 className={`me-3`}>Student List</h1>
                {/*//Case 1*/}
                <Link className={`btn btn-success btn-sm`} to={`/student/add`}>Create Student</Link>
                {/*//Case 2*/}
                {/*<button className={`btn btn-success btn-sm`} onClick={handleNavigate}>Create Student</button>*/}
            </div>
            <div>
                <ul>
                    {
                        studentList.map((list)=>(
                            <li key={list.id}>
                                
                                <Link
                                    className={`btn btn-sm btn-link ms-3`}
                                    to={`/student/detail/${list.id}/${list.name}`}>{list.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default StudentList;
