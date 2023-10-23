import React, { useState } from "react";

function StudentManager() {
    const [state, setState] = useState({
        name: "",
        mobile: "",
        email: "",
    });

    return (
        <>
            <h1>Bài tập - Ứng dụng quản lý học sinh</h1>
            <h1>Student List</h1>
            <section>
                <div className="row">
                    <div className="col-md-1">
                        <label className="form-lable">Name</label>
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-1">
                        <label className="form-lable">Mobile</label>
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="tel" name="mobile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <label className="form-lable">Email</label>
                    </div>
                    <div className="col-md-4">
                        <input className="form-control" type="email" name="email" />
                    </div>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary mt-2">
                        Add
                    </button>
                </div>
            </section>
            <section>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </section>
        </>
    );
}
export default StudentManager;
