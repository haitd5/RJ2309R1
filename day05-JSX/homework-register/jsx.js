const registerFrom = (
    <div className="register">
        <h1 className="register-heading">Register</h1>
        <p className="register-p">Kindly fill in this form to register</p>
        <form className="register-form" autoCapitalize="off" action="#" method="POST" id="form-1">
            <label for="username" className="register-label">Username</label>
            <input type="text" id="username" className="register-input" placeholder="Enter username"></input>

            <label for="email" className="register-label">Email</label>
            <input type="email" id="email" className="register-input" placeholder="Enter email"></input>

            <label for="password" className="register-label">Password</label>
            <input type="password" id="password" className="register-input" placeholder="Enter password"></input>

            <label for="rep-password" className="register-label">Repeat Password</label>
            <input type="password" id="rep-password" className="register-input" placeholder="Repeat password"></input>
            
            <button className="register-submit" type="submit">Register</button>
        </form>

        <p className="register-p">
            <span>Already have an account ? </span>
            <a href="#" className="register-link"></a>
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(registerFrom)