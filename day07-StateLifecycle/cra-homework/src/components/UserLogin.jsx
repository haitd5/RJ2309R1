import React from "react";

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }
    handleLogin = () => {
        this.setState({
            ...this.state,
            isLoggedIn: true,
        });
    };
    handleLogOut = () => {
        this.setState({
            ...this.state,
            isLoggedIn: false,
        });
    };

    render() {
        if (!this.state.isLoggedIn) {
            return (
                <>
                    <h1>Bài thực hành - Kiểm tra User Login/Logout</h1>
                    <h2>Please Log in</h2>
                    <button className="btn btn-primary" onClick={this.handleLogin}>
                        Log in
                    </button>
                </>
            );
        } else {
            return (
                <>
                    <h1>Bài thực hành - Kiểm tra User Login/Logout</h1>
                    <h2>Welcome</h2>
                    <button onClick={this.handleLogOut}>Log out</button>
                </>
            );
        }
    }
}

export default UserLogin;
