import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import AppCount from "./components/AppCount";
import ChangeAutoColor from "./components/ChangeAutoColor";
import Alert from "./components/Alert";
import UserLogin from "./components/UserLogin";
import Expand from "./components/Expand";
import Calculator from "./components/Calculator";
import Login from "./components/Login";
import StudentManager from "./components/StudentManager";

function App() {
    return (
        <div className="container">
            {/* <AppCount /> */}
            {/* <ChangeAutoColor /> */}
            {/* <Alert /> */}
            {/* <UserLogin /> */}
            {/* <Expand /> */}
            {/* <Calculator /> */}
            {/* <Login /> */}
            <StudentManager />
        </div>
    );
}

export default App;
