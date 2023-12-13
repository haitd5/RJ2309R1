import React, { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

// Nếu đặt type của button là button thì viết sự kiện trong button, còn nếu là type là submit thì bắt sự kiện trong thẻ form
// trong 1 form thi co mot type sumbmit
function TwoWayBindingFormSubmitObject() {
    const [state, setState] = useState({
        email: "",
        password: "",
        mobile: "",
        isSuccess: false,
    });

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [isSuccess, setIsSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // console.log({
        //     email: email,
        //     password: password,
        // });
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
        // setState({
        //     ...state,
        //     showAlert: true,
        // });

        console.log(state);

        //call API
    };
    const handleGetAccount = () => {
        //fetching date from api
        setState({
            ...state,
            email: "haitd5@gmail.com",
            password: "12345678",
        });
    };
    const handleInputVale = (e) => {
        // console.log(e.target.name, e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const { email, password, mobile, isSuccess } = state;
    return (
        <div>
            <h1>Login form</h1>
            {(isSuccess && (
                <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thành công"} />
            )) ||
                (!isSuccess && (
                    <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thất bại"} />
                ))}
            <form onSubmit={handleLoginSubmit}>
                <div className="form-group mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        required
                        name="email"
                        onInput={handleInputVale}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Mobile</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={mobile}
                        required
                        name="mobile"
                        onInput={handleInputVale}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Passwork</label>
                    <input
                        type="password"
                        className="form-control"
                        minLength={8}
                        value={password}
                        required
                        name="password"
                        onInput={handleInputVale}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-dark me-3" type="submit">
                        Login
                    </button>
                    <button className="btn btn-warning " type="button" onClick={handleGetAccount}>
                        Get Account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TwoWayBindingFormSubmitObject;
