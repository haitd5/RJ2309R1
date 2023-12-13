import React, { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

// Nếu đặt type của button là button thì viết sự kiện trong button, còn nếu là type là submit thì bắt sự kiện trong thẻ form
// trong 1 form thi co mot type sumbmit
function TwoWayBindingFormSubmitComponent() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // console.log({
        //     email: email,
        //     password: password,
        // });
        if (email === "haitd5@gmail.com" && password === "12345678") {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }
        setShowAlert(true);
        //call API
    };
    const handleGetAccount = () => {
        //fetching date from api
        setEmail("haitd5@gmail.com");
        setPassword("12345678");
    };

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
                        onInput={(e) => setEmail(e.target.value)}
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
                        onInput={(e) => setPassword(e.target.value)}
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

export default TwoWayBindingFormSubmitComponent;
