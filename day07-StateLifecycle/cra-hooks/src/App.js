import "./App.css";
import Appcount from "./components/AppCounts";
import AppCountJS from "./components/AppCountsJS";
import CheckBoxGroup from "./components/CheckBoxGroup";
import RadioGroup from "./components/RadioGroup";

function App() {
    return (
        <div className="container">
            {/* <AppCountJS /> */}
            {/* <Appcount /> */}
            {/* <RadioGroup /> */}
            <CheckBoxGroup />
        </div>
    );
}

export default App;
