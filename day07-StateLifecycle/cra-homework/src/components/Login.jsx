import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";

function Login() {
    const [state, setState] = useState({
        email: "",
        password: "",
        isSuccess: false,
    });

    const [showAlert, setShowAlert] = useState(false);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (email === "haitd5@gmail.com" && password === "12345678") {
            setState({
                ...state,
                isSuccess: true,
            });
        } else {
            setState({
                ...state,
                isSuccess: false,
            });
        }
        setShowAlert(true);
    };
    const handleInputValue = (e) => {
        // console.log(e.target.name, e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const handleGetAccount = () => {
        setState({
            ...state,
            email: "haitd5@gmail.com",
            password: "12345678",
        });
    };
    const { email, password, isSuccess } = state;
    return (
        <div>
            <h1>Bài tập - Xử lý sự kiện Login/Logout</h1>
            <h1>Login Form</h1>
            {(isSuccess && (
                <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thành công"} />
            )) ||
                (!isSuccess && (
                    <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thất bại"} />
                ))}
            <form onSubmit={handleLoginSubmit}>
                <div className="form-group mb-3">
                    <label className="form-lable">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        required
                        name="email"
                        onInput={handleInputValue}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-lable">Passwork</label>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        required
                        minLength={8}
                        name="password"
                        onInput={handleInputValue}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-dark me-2" type="submit">
                        Login
                    </button>
                    <button className="btn btn-warning" type="button" onClick={handleGetAccount}>
                        Get Account
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Login;
