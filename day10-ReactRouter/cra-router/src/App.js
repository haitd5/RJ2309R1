import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Layout/NavBar";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" />
            </Routes>
        </>
    );
}

export default App;
