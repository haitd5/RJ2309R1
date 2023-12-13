import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseState from "./components/UseState";
import TwoWayBinding from "./components/TwoWayBinding";
import TwoWayBindingFormSubmit from "./components/TwoWayBindingFormSubmit";
import TwoWayBindingFormSubmitComponent from "./components/TwoWayBindingFormSubmitComponent";
import TwoWayBindingFormSubmitObject from "./components/TwoWayBindingFormSubmitObject";
import InitStateCallback from "./components/InitStateCallback";
import PlayListApp from "./components/Playlist/PlayListApp";

function App() {
    return (
        <div className="container mt-3">
            <ToastContainer theme="colored" autoClose={3000} />
            {/* <UseState /> */}
            {/* <TwoWayBinding /> */}
            {/* <TwoWayBindingFormSubmit /> */}
            {/* <TwoWayBindingFormSubmitComponent /> */}
            {/* <TwoWayBindingFormSubmitObject /> */}
            {/* <InitStateCallback /> */}
            <PlayListApp />
        </div>
    );
}

export default App;
