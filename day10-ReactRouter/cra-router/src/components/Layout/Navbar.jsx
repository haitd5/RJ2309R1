import React from "react";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">
                        React Router DOM
                    </a>
                    <div className="collaspe nav-collaspe" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#!">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
