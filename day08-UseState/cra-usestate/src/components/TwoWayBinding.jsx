import React, { useState } from "react";

function TwoWayBinding() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleLogin = () => {
        console.log({
            email: email,
            password: password,
        });
    };

    console.log(email);
    console.log(password);
    return (
        <div>
            <h1>Login form</h1>
            <form>
                <div className="form-group mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Passwork</label>
                    <input type="password" className="form-control" onInput={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-dark" type="button" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TwoWayBinding;
